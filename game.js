'use strict';
class Game {
  constructor(box, tower) {
    this.box = box;
    this.tower = tower;
  }
  update() {
    this.box.moveHorizontally(1);
    this.tower.moveHorizontally(-1);
  }
  moveBox(dir) {
    this.box[dir]();
  }
  get boxDetails() {
    return this.box.getDetails();
  }
  get towerDetails() {
    return this.tower.getDetails();
  }
  crashWith() {
    const {x: x1, y: y1, width: w1, height: h1} = this.boxDetails;
    const {x: x2, y: y2, width: w2, height: h2} = this.towerDetails;
    const boxLeft = x1;
    const boxRight = x1 + w1;
    const boxTop = y1;
    const boxBottom = y1 + h1;
    const towerLeft = x2;
    const towerRight = x2 + w2;
    const towerTop = y2;
    const towerBottom = y2 + h2;
    return !(
      boxBottom < towerTop ||
      boxTop > towerBottom ||
      boxRight < towerLeft ||
      boxLeft > towerRight
    );
  }
}
