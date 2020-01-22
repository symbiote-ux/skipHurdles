'use strict';
class Box {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }
  moveLeft() {
    this.x -= 5;
  }
  moveRight() {
    this.x += 5;
  }
  moveUp() {
    this.y -= 8;
  }
  moveDown() {
    this.y += 8;
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
}
