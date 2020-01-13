'use strict';
class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.prevX = 0;
    this.prevY = 0;
  }
  create(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  clear(ctx) {
    this.prevX = this.x;
    this.prevY = this.y;
    ctx.clearRect(this.prevX, this.prevY, this.width, this.height);
  }
  moveLeft() {
    this.x -= 1;
  }
  moveRight() {
    this.x += 1;
  }
  moveUp() {
    this.y -= 1;
  }
  moveDown() {
    this.y += 1;
  }
}
