'use strict';
const numR = () => {
  return Math.ceil(Math.random() * 250);
};

class Game {
  constructor(box, ctx) {
    this.box = box;
    this.ctx = ctx;
  }
  clear() {
    this.ctx.clearRect(this.box.x, this.box.y, this.box.width, this.box.height);
  }
  update() {
    this.ctx.fillStyle = `rgb(${numR()},${numR()},${numR()})`;
    this.box.x += 1;
    this.ctx.fillRect(this.box.x, this.box.y, this.box.width, this.box.height);
  }
  moveBox(key) {
    console.log(key);
    if (key == 37) {
      this.box.clear(this.ctx);
      this.box.moveLeft();
    }
    if (key == 39) {
      this.box.clear(this.ctx);
      this.box.moveRight();
    }
    if (key == 38) {
      this.box.clear(this.ctx);
      this.box.moveUp();
    }
    if (key == 40) {
      this.box.clear(this.ctx);
      this.box.moveDown();
    }
  }
}
