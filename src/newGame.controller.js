const {
  BOTTOM_LEFT, CENTRE, TOP_LEFT, BOTTOM_RIGHT, MIDDLE_LEFT,
} = require('./constants');
const { Game } = require('./ticTacToe');

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
  /**
   * let output = input;
    output += `\n${this.print()}`;
    output += '\n';
    output += this.getOutcome();
    this.move();
    if (this.index < 9) {
      return this.play(output);
    }
    return output;
   */
  return result;
};

module.exports = { newGame };
