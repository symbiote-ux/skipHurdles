'use strict';
class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.prevX = 0;
    this.prevY = 0;
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
  getDetails() {
    return {
      prevX: this.prevX,
      prevY: this.prevY,
      width: this.width,
      height: this.height,
      color: this.color,
      x: this.x,
      y: this.y
    };
  }
  moveHorizontally(delta) {
    this.x += delta;
    this.prevX = this.x;
    this.prevY = this.y;
  }
}
