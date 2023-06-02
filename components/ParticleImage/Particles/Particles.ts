"use client";
import * as THREE from "three";
import { TweenLite } from "gsap";
import TouchTexture from "./TouchTexture";
import vertexShader from "@/components/ParticleImage/shaders/particle.vert";
import fragmentShader from "@/components/ParticleImage/shaders/particle.frag";
import EventEmitter from "events";
import { GMBasic, GMShader, ParticleSettings, UIManager } from "../types";
import InteractiveControls from "../InteractiveControls";
import { easeInQuad } from "@/utils/easing.utils";

export default class Particles extends EventEmitter {
	private uiManager: UIManager;

	/**
	 * Pass initialSettings to create a animation From these settings
	 */
	private initialSettings?: ParticleSettings;
	private settings: ParticleSettings = {
		randomize: 1.0,
		depth: 4.0,
		size: 1.1,
	};

	public container: any;
	public shaderObject?: GMShader;
	public basicObject?: GMBasic;
	private texture: any;
	private interactive?: InteractiveControls;
	private width: number = 0;
	private height: number = 0;
	private numPoints: any;
	private object3D: THREE.Mesh | any;
	private hitArea: THREE.Mesh | any;
	private handlerInteractiveMove?: (e: any) => void;
	private touch?: TouchTexture;
	public isInitialized: boolean = false;

	constructor({
		uiManager,
		initialSettings,
		settings,
	}: {
		uiManager: UIManager,
		initialSettings?: ParticleSettings,
		settings?: ParticleSettings,
	}) {
		super();
		this.container = new THREE.Object3D();
		this.uiManager = uiManager;
		this.interactive = new InteractiveControls(
			this.uiManager.camera,
			this.uiManager.el,
			!!this.uiManager.isMobile,
			this.uiManager.raycaster,
			this.uiManager.mouse
		);
		if (settings) {
			this.settings = settings;
		}
		if (initialSettings) {
			this.initialSettings = initialSettings;
		}
	}

	async init(src: string) {
		if (this.isInitialized) {
			await this.hide(true);
		}
		console.log("particles.init");

		const loader = new THREE.TextureLoader();
		this.isInitialized = true;

		loader.load(src, (texture) => {
			console.log({ texture })
			this.texture = texture;
			this.texture.minFilter = THREE.LinearFilter;
			this.texture.magFilter = THREE.LinearFilter;
			// this.texture.format = THREE.RGBFormat;
			this.texture.format = THREE.RGBAFormat;

			this.width = texture.image.width;
			this.height = texture.image.height;

			this.initPoints(true);
			this.initHitArea();
			this.initTouch();
			this.resize();
			this.show();
		});
	}

	initPoints(discard?: boolean) {
		this.numPoints = this.width * this.height;

		let numVisible = this.numPoints;
		let threshold = 0;
		let originalColors: any;

		if (discard) {
			// discard pixels darker than threshold #22
			numVisible = 0;
			threshold = 34;

			const img = this.texture.image;
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

			canvas.width = this.width;
			canvas.height = this.height;
			ctx.scale(1, -1);
			ctx.drawImage(img, 0, 0, this.width, this.height * -1);

			const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			originalColors = Float32Array.from(imgData.data);

			for (let i = 0; i < this.numPoints; i++) {
				if (originalColors[i * 4 + 0] > threshold) numVisible++;
			}
		}

		const uniforms = {
			uTime: { value: 0 },
			uRandom: { value: this.settings.randomize },
			uDepth: { value: this.settings.depth },
			uSize: { value: this.settings.size },
			uTextureSize: { value: new THREE.Vector2(this.width, this.height) },
			uTexture: { value: this.texture },
			uTouch: { value: null },
		};

		const material = new THREE.RawShaderMaterial({
			uniforms,
			vertexShader,
			fragmentShader,
			depthTest: false,
			transparent: true,
			blending: THREE.AdditiveBlending
		});

		const geometry = new THREE.InstancedBufferGeometry();

		// positions
		const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3);
		positions.setXYZ(0, -0.5, 0.5, 0.0);
		positions.setXYZ(1, 0.5, 0.5, 0.0);
		positions.setXYZ(2, -0.5, -0.5, 0.0);
		positions.setXYZ(3, 0.5, -0.5, 0.0);
		geometry.setAttribute("position", positions);

		// uvs
		const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2);
		uvs.setXYZ(0, 0.0, 0.0, 0);
		uvs.setXYZ(1, 1.0, 0.0, 0);
		uvs.setXYZ(2, 0.0, 1.0, 0);
		uvs.setXYZ(3, 1.0, 1.0, 0);
		geometry.setAttribute("uv", uvs);

		// index
		geometry.setIndex(new THREE.BufferAttribute(new Uint16Array([0, 2, 1, 2, 3, 1]), 1));

		const indices = new Uint16Array(numVisible);
		const offsets = new Float32Array(numVisible * 3);
		const angles = new Float32Array(numVisible);

		for (let i = 0, j = 0; i < this.numPoints; i++) {
			if (discard && originalColors[i * 4 + 0] <= threshold) continue;

			offsets[j * 3 + 0] = i % this.width;
			offsets[j * 3 + 1] = Math.floor(i / this.width);

			indices[j] = i;

			angles[j] = Math.random() * Math.PI;

			j++;
		}

		geometry.setAttribute("pindex", new THREE.InstancedBufferAttribute(indices, 1, false));
		geometry.setAttribute("offset", new THREE.InstancedBufferAttribute(offsets, 3, false));
		geometry.setAttribute("angle", new THREE.InstancedBufferAttribute(angles, 1, false));

		this.object3D = new THREE.Mesh(geometry, material);
		this.container.add(this.object3D);
		this.shaderObject = {
			geometry,
			material
		}
	}

	initTouch() {
		// if (!this.object3D) return;
		// create only once
		if (!this.touch) this.touch = new TouchTexture(this);
		this.object3D.material.uniforms.uTouch.value = this.touch.texture;
	}

	initHitArea() {
		const geometry = new THREE.PlaneGeometry(this.width, this.height, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true, depthTest: false });
		material.visible = false;
		this.hitArea = new THREE.Mesh(geometry, material);
		this.container.add(this.hitArea);
		this.basicObject = {
			geometry,
			material
		}
		this.emit("ready");
	}

	addListeners() {
		if (this.interactive) {
			this.handlerInteractiveMove = this.onInteractiveMove.bind(this);

			this.interactive.addListener("interactive-move", this.handlerInteractiveMove);
			this.interactive.objects.push(this.hitArea);
			this.interactive.enable();
		}
	}

	removeListeners() {
		if (this.interactive) {
			if (this.handlerInteractiveMove) {
				this.interactive.removeListener("interactive-move", this.handlerInteractiveMove);
			}

			const index = this.interactive.objects.findIndex((obj: any) => obj === this.hitArea);
			this.interactive.objects.splice(index, 1);
			this.interactive.disable();
		}
	}

	// ---------------------------------------------------------------------------------------------
	// PUBLIC
	// ---------------------------------------------------------------------------------------------

	update(delta: any) {
		if (!this.object3D) return;
		if (this.touch) this.touch.update();

		this.object3D.material.uniforms.uTime.value += delta;
	}

	show(time = 1.0) {
		if (this.initialSettings) {
			TweenLite.fromTo(this.object3D.material.uniforms.uSize, time, { value: this.initialSettings.size }, { value: this.settings.size });
			TweenLite.to(this.object3D.material.uniforms.uRandom, time, { value: 1 });
			TweenLite.fromTo(this.object3D.material.uniforms.uDepth, time * 1.5, { value: this.initialSettings.depth }, { value: this.settings.depth });
			setTimeout(() => {
				this.emit("animation-complete");
			}, time * 1.5 * 1000)
		}
		this.addListeners();
	}

	hide(_destroy: any, time = 0.4) {
		return new Promise<void>((resolve, reject) => {
			TweenLite.to(this.object3D.material.uniforms.uRandom, time, {
				value: 5.0, onComplete: () => {
					if (_destroy) this.destroy();
					resolve();
				}
			});
			TweenLite.to(this.object3D.material.uniforms.uDepth, time, { value: -20.0 });
			TweenLite.to(this.object3D.material.uniforms.uSize, time * 0.8, { value: 0.0 });

			this.removeListeners();
		});
	}

	destroy() {
		if (!this.object3D) return;

		this.object3D.parent.remove(this.object3D);
		this.object3D.geometry.dispose();
		this.object3D.material.dispose();
		this.object3D = null;

		if (!this.hitArea) return;

		this.hitArea.parent.remove(this.hitArea);
		this.hitArea.geometry.dispose();
		this.hitArea.material.dispose();
		this.hitArea = null;
	}

	// ---------------------------------------------------------------------------------------------
	// EVENT HANDLERS
	// ---------------------------------------------------------------------------------------------

	resize(shouldResizeBoth?: boolean) {
		if (!this.object3D) return;

		const fovHeight = 2 * Math.tan((this.uiManager.camera.fov * Math.PI) / 180 / 2) * this.uiManager.camera.position.z;
		const scale = fovHeight / this.height;

		this.object3D.scale.set(scale, scale, 1);
		this.hitArea.scale.set(scale, scale, 1);

		if (this.interactive && shouldResizeBoth) {
			this.interactive.resize();
		}
	}

	onInteractiveMove(e: any) {
		const uv = e.intersectionData.uv;
		if (this.touch) this.touch.addTouch(uv);
	}
}
