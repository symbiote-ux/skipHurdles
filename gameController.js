const handleKeyPress = game => {
  game.moveBox(event.keyCode);
};

const attachEventListeners = game => {
  document.body.onkeydown = handleKeyPress.bind(null, game);
};

const main = function() {
  const canvas = document.getElementById('screen');
  canvas.height = 270;
  canvas.width = 480;
  const ctx = canvas.getContext('2d');
  const box = new Component(30, 30, 10, 120);
  const game = new Game(box, ctx);
  attachEventListeners(game);
  setInterval(() => {
    game.update();
  }, 200);
};
