class Raf {
  private callbacks: {
    callback: (now: number, deltaTime: number) => void;
    priority: number;
  }[] = [];
  private now: number = 0;

  constructor() {
    if (typeof window === "undefined") return;

    this.now = performance.now();
    requestAnimationFrame(this.raf);
  }

  add(
    callback: (now: number, deltaTime: number) => void,
    priority: number = 0
  ): () => void {
    this.callbacks.push({ callback, priority });
    this.callbacks.sort((a, b) => a.priority - b.priority);

    return () => this.remove(callback);
  }

  remove(callback: (now: number, deltaTime: number) => void): void {
    this.callbacks = this.callbacks.filter(
      ({ callback: cb }) => callback !== cb
    );
  }

  private raf = (now: number): void => {
    requestAnimationFrame(this.raf);

    const deltaTime = now - this.now;
    this.now = now;

    for (let i = 0; i < this.callbacks.length; i++) {
      this.callbacks[i].callback(now, deltaTime);
    }
  };
}

const raf = new Raf();
export { raf };
