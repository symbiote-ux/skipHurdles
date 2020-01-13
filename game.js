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
    this.box.x += 1;
    this.box.fillRect(this.ctx);
  }
  moveBox(key) {
    if (key == 37) {
      this.box.moveLeft();
      this.update();
    }
    if (key == 39) {
      this.box.moveRight();
      this.update();
    }
    if (key == 38) {
      this.box.moveUp();
      this.update();
    }
    if (key == 40) {
      this.box.moveDown();
      this.update();
    }
  }
}
