'use strict';
class Hurdles {
  constructor(tower1, tower2) {
    this.hurdles = [tower1, tower2];
  }
  get details() {
    const details = [];
    this.hurdles.map(tower => {
      details.push(tower.getDetails());
    });
    return details;
  }
  update() {
    this.hurdles.forEach(tower => {
      tower.moveHorizontally(-1);
    });
  }
  crash({boxLeft, boxRight, boxBottom, boxTop}) {
    const result = this.hurdles.some(tower => {
      return tower.crashWith({boxLeft, boxRight, boxBottom, boxTop});
    });
    return result;
  }
}
