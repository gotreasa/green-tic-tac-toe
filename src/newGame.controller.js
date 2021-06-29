const {
  BOTTOM_LEFT, CENTRE, TOP_LEFT, BOTTOM_RIGHT, MIDDLE_LEFT,
} = require('./constants');
const { Game, getPlayer } = require('./ticTacToe');

const play = (game, input) => {
  const output = input;
  game.move();
  output.moves.push(game.getMove());
  if (game.hasVerticalLine()) {
    output.result = getPlayer(game.index - 1);
    return output;
  }
  return play(game, output);
};

const newGame = () => {
  const game = new Game();
  game.setOrder([
    BOTTOM_LEFT,
    CENTRE,
    TOP_LEFT,
    BOTTOM_RIGHT,
    MIDDLE_LEFT,
  ]);
  const result = {
    moves: [
      game.getMove(),
    ],
  };
  play(game, result);
  return result;
};

module.exports = { newGame };
