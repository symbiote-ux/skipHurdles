'use strict';
class Game {
  constructor(box, hurdles) {
    this.box = box;
    this.hurdles = hurdles;
    this.score = new Score();
  }
  update() {
    this.hurdles.update();
    this.score.count(1);
  }
  moveUp() {
    this.box.moveUp();
  }
  moveDown() {
    this.box.moveDown();
  }
  moveRight() {
    this.box.moveRight();
  }
  moveLeft() {
    this.box.moveLeft();
  }
  status() {
    return {
      boxDetails: this.box.getDetails(),
      towerDetails: this.hurdles.details(),
      score: this.score.currentScore()
    };
  }
  hasBoxCrash() {
    const {x, y, width, height} = this.box.getDetails();
    const boxLeft = x;
    const boxRight = x + width;
    const boxTop = y;
    const boxBottom = y + height;
    return this.hurdles.crash({boxLeft, boxBottom, boxRight, boxTop});
  }
  insertTower() {
    this.hurdles.generateNewTower();
  }
  isOver() {
    return this.hasBoxCrash();
  }
  count;
}
