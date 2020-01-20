const stopGame = interval => {
  clearInterval(interval);
  // document.write('Game over');
};

const drawHurdle = (game, ctx) => {
  const {x, y, width, height, color} = game.towerDetails;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

const drawFillRect = (game, ctx) => {
  const {x, y, width, height, color} = game.boxDetails;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

const clearScreen = () => {
  const canvas = document.getElementById('screen');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const drawRect = (game, ctx) => {
  clearScreen();
  game.update();
  drawFillRect(game, ctx);
  drawHurdle(game, ctx);
};

const handleKeyDown = game => {
  switch (event.keyCode) {
    case 37:
      game.moveBox('moveLeft');
      break;
    case 38:
      game.moveBox('moveUp');
      break;
    case 39:
      game.moveBox('moveRight');
      break;
    case 40:
      game.moveBox('moveDown');
  }
};

const attachEventListeners = game => {
  document.body.onkeydown = handleKeyDown.bind(null, game);
};

const main = function() {
  const canvas = document.getElementById('screen');
  canvas.height = 270;
  canvas.width = 480;
  const ctx = canvas.getContext('2d');
  const box = new Component(30, 30, 'red', 10, 120);
  const tower = new Component(10, 200, 'green', 300, 120);
  const game = new Game(box, tower);
  attachEventListeners(game);

  const interval = setInterval(() => {
    drawRect(game, ctx);
    if (game.crashWith()) {
      stopGame(interval);
    }
  }, 50);
};
