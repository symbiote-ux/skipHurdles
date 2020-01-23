'use strict';
const getPosition = () => (Math.floor(Math.random() * 2) ? 0 : 120);

class Hurdles {
  constructor(tower) {
    this.hurdles = [tower];
  }
 details() {
    const details = [];
    this.hurdles.map(tower => {
      details.push(tower.getDetails());
    });
    return details;
  }
  update() {
    const firstHurdle = this.hurdles[0];
    if (firstHurdle.xCord === 0) {
      this.hurdles.shift();
    }
    this.hurdles.forEach(tower => {
      tower.moveHorizontally(-3);
    });
  }
  crash({boxLeft, boxRight, boxBottom, boxTop}) {
    const result = this.hurdles.some(tower => {
      return tower.crashWith({boxLeft, boxRight, boxBottom, boxTop});
    });
    return result;
  }
  generateNewTower() {
    const tower = new Tower(10, 150, 'green', 480, getPosition());
    this.hurdles.push(tower);
  }
}
