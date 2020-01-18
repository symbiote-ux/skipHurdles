'use strict';
const numR = () => {
  return Math.ceil(Math.random() * 250);
};

class Game {
  constructor(box) {
    this.box = box;
  }
  update() {
    return this.box.update();
  }
  moveBox(dir) {
    this.box[dir]();
  }
  boxDetails() {
    return this.box.details();
  }
}
