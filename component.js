'use strict';
class Component {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.prevX = 0;
    this.prevY = 0;
  }
  clearRect(ctx) {
    ctx.clearRect(this.prevX, this.prevY, this.width, this.height);
  }
  fillRect(ctx) {
    this.prevX = this.x;
    this.prevY = this.y;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 5;
  }
  moveUp() {
    this.y -= 5;
  }
  moveDown() {
    this.y += 5;
  }
}
