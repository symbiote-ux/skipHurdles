const stopGame = interval => {
  const msg = document.getElementById('msg');
  msg.innerText = 'Game Over';
  clearInterval(interval);
};

const drawTower = (game, ctx) => {
  const hurdles = game.towerDetails;
  hurdles.forEach(tower => {
    const {tX, tY, towerWidth, towerHeight, towerColor} = tower;
    ctx.fillStyle = towerColor;
    ctx.fillRect(tX, tY, towerWidth, towerHeight);
  });
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

const drawGame = (game, ctx) => {
  clearScreen();
  drawFillRect(game, ctx);
  drawTower(game, ctx);
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
  const box = new Box(30, 30, 'red', 10, 120);
  const tower1 = new Tower(10, 200, 'green', 200, 120);
  const tower2 = new Tower(10, 200, 'green', 420, 120);
  const hurdles = new Hurdles(tower1, tower2);
  const game = new Game(box, hurdles);
  attachEventListeners(game);

  const interval = setInterval(() => {
    drawGame(game, ctx);
    game.update();
    if (game.hasBoxCrash()) {
      stopGame(interval);
    }
  }, 50);
};
