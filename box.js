'use strict';
class Box {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.gravity = 1;
  }
  moveLeft() {
    if (this.x > 0) this.x -= 5;
  }
  moveRight() {
    if (this.x < 450) this.x += 5;
  }
  moveUp() {
    if (this.y > 3) this.y -= 8;
  }
  moveDown(weight = 8) {
    if (this.y < 240) this.y += weight;
  }
  getDetails() {
    return {
      width: this.width,
      height: this.height,
      color: this.color,
      x: this.x,
      y: this.y
    };
  }
  moveHorizontally(delta) {
    this.x += delta;
  }
  fallDown() {
    this.moveDown(this.gravity);
  }
}
