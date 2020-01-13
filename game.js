'use strict';
const numR = () => {
  return Math.ceil(Math.random() * 250);
};

class Game {
  constructor(box, ctx) {
    this.box = box;
    this.ctx = ctx;
  }
  update() {
    this.box.clearRect(this.ctx);
    this.ctx.fillStyle = `rgb(${numR()},${numR()},${numR()})`;
    // this.ctx.fillStyle = 'red';
    this.box.x += 1;
    this.box.fillRect(this.ctx);
  }
  moveBox(key) {
    if (key[37]) {
      this.box.moveLeft();
    }
    if (key[39]) {
      this.box.moveRight();
    }
    if (key[38]) {
      this.box.moveUp();
    }
    if (key[40]) {
      this.box.moveDown();
    }
  }
}
