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
  left() {
    this.x -= 10;
  }
  right() {
    this.x += 5;
  }
  up() {
    this.y -= 5;
  }
  down() {
    this.y += 5;
  }
  details() {
    return {
      prevX: this.prevX,
      prevY: this.prevY,
      width: this.width,
      height: this.height,
      x: this.x,
      y: this.y
    };
  }
  update() {
    this.prevX = this.x;
    this.prevY = this.y;
  }
}
