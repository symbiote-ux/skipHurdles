const handleKeyUp = game => {
  game.keys[event.keyCode] = event.type == 'keydown';
};

const handleKeyDown = game => {
  game.keys = game.keys || [];
  game.keys[event.keyCode] = event.type == 'keydown';
  game.moveBox(game.keys);
};

const attachEventListeners = game => {
  document.body.onkeydown = handleKeyDown.bind(null, game);
  document.body.onkeyup = handleKeyUp.bind(null, game);
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
  }, 50);
};
