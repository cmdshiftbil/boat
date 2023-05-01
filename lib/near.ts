export default class Nearby {
  el: any;
  options: any;
  elRect: any;
  docScrolls!: { left: number; top: number };
  closestPoint!: { x: number; y: number };
  mousemoveFn!: (ev: any) => void;

  constructor(el: any, options: any) {
    this.el = el;
    this.options = options;
    this.init();
  }

  init() {
    const distancePoints = (x1: number, y1: number, x2: number, y2: number) =>
      Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

    const getMousePos = (e: any) => {
      var posx = 0,
        posy = 0;
      if (!e) var e: any = window.event;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      return { x: posx, y: posy };
    };

    this.elRect = this.el.getBoundingClientRect();
    this.docScrolls = {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    };
    this.closestPoint = { x: 0, y: 0 };

    this.mousemoveFn = (ev) => {
      window.requestAnimationFrame(() => {
        const mousepos = getMousePos(ev);

        if (mousepos.x < this.elRect.left + this.docScrolls.left) {
          this.closestPoint.x = this.elRect.left + this.docScrolls.left;
        } else if (
          mousepos.x >
          this.elRect.width + this.elRect.left + this.docScrolls.left
        ) {
          this.closestPoint.x =
            this.elRect.width + this.elRect.left + this.docScrolls.left;
        } else {
          this.closestPoint.x = mousepos.x;
        }

        if (mousepos.y < this.elRect.top + this.docScrolls.top) {
          this.closestPoint.y = this.elRect.top + this.docScrolls.top;
        } else if (
          mousepos.y >
          this.elRect.height + this.elRect.top + this.docScrolls.top
        ) {
          this.closestPoint.y =
            this.elRect.height + this.elRect.top + this.docScrolls.top;
        } else {
          this.closestPoint.y = mousepos.y;
        }

        if (this.options.onProgress) {
          this.options.onProgress(
            distancePoints(
              mousepos.x,
              mousepos.y,
              this.closestPoint.x,
              this.closestPoint.y
            )
          );
        }
      });
    };

    window.addEventListener("mousemove", this.mousemoveFn);
  }

  destroy() {
    window.removeEventListener("mousemove", this.mousemoveFn);
  }
}
