'use strict';
class Game {
  constructor(box, hurdles) {
    this.box = box;
    this.hurdles = hurdles;
  }
  update() {
    this.hurdles.update();
  }
  moveBox(dir) {
    this.box[dir]();
  }
  get boxDetails() {
    return this.box.getDetails();
  }
  get towerDetails() {
    return this.hurdles.details;
  }
  hasBoxCrash() {
    const {x, y, width, height} = this.boxDetails;
    const boxLeft = x;
    const boxRight = x + width;
    const boxTop = y;
    const boxBottom = y + height;
    return this.hurdles.crash({boxLeft, boxBottom, boxRight, boxTop});
  }
  insertTower() {
    this.hurdles.generateNewTower();
  }
}
