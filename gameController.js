const drawFillRect = (game, ctx) => {
  const {x, y, width, height} = game.boxDetails();
  ctx.fillStyle = 'red';
  ctx.fillRect(x, y, width, height);
};

const drawClearRect = (game, ctx) => {
  const {prevX, prevY, width, height} = game.boxDetails();
  ctx.clearRect(prevX, prevY, width, height);
};

const drawRect = (game, ctx) => {
  drawClearRect(game, ctx);
  game.update();
  drawFillRect(game, ctx);
};
const handleKeyDown = game => {
  switch (event.keyCode) {
    case 37:
      game.moveBox('left');
      break;
    case 39:
      game.moveBox('right');
      break;
    case 38:
      game.moveBox('up');
      break;
    case 40:
      game.moveBox('down');
      break;
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
  const box = new Component(30, 30, 10, 120);
  const game = new Game(box);
  attachEventListeners(game);

  setInterval(() => {
    drawRect(game, ctx);
  }, 50);
};
