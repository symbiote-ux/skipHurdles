'use strict';
class Tower {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }
  getDetails() {
    return {
      towerWidth: this.width,
      towerHeight: this.height,
      towerColor: this.color,
      tX: this.x,
      tY: this.y
    };
  }
  moveHorizontally(delta) {
    this.x += delta;
  }
  crashWith({boxLeft, boxRight, boxBottom, boxTop}) {
    const towerLeft = this.x;
    const towerRight = this.x + this.width;
    const towerTop = this.y;
    const towerBottom = this.y + this.height;
    const hasCrashed =
      boxBottom >= towerTop &&
      boxTop <= towerBottom &&
      boxLeft <= towerRight &&
      boxRight >= towerLeft;
    return hasCrashed;
  }
}
