const {
  TOP_LEFT,
  TOP_CENTRE,
  TOP_RIGHT,
  MIDDLE_LEFT,
  CENTRE,
  MIDDLE_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_CENTRE,
  BOTTOM_RIGHT,
} = require('./constants');

const hasDuplicate = (input) => input.some(
  (element, currentIndex) => input.some(
    (item, index) => (currentIndex !== index ? element === item : false),
  ),
);

class Game {
  constructor() {
    this.squares = new Array(9).fill(' ');
    this.index = 0;
  }

  setOrder(order) {
    if (hasDuplicate(order)) {
      throw Error('Err');
    }
    this.order = order;
  }

  move() {
    const squareIndex = this.order[this.index];
    this.squares[squareIndex] = this.index % 2 === 0 ? 'X' : 'O';
    this.index += 1;
  }

  getGrid() {
    return `${this.squares[TOP_LEFT]}|${this.squares[TOP_CENTRE]}|${this.squares[TOP_RIGHT]}
-+-+-
${this.squares[MIDDLE_LEFT]}|${this.squares[CENTRE]}|${this.squares[MIDDLE_RIGHT]}
-+-+-
${this.squares[BOTTOM_LEFT]}|${this.squares[BOTTOM_CENTRE]}|${this.squares[BOTTOM_RIGHT]}`;
  }

  getGameCreationOutput() {
    return `Game Board Creation…
${this.getGrid()}
Board Created.
The game will start with player X`;
  }

  getMoveOutput() {
    return `Player O:
${this.getGrid()}`;
  }

  print() {
    if (this.index === 0) {
      this.output = this.getGameCreationOutput();
    } else {
      this.output = this.getMoveOutput();
    }
    console.log(this.output);
    return this.output;
  }
}
const game = new Game();
game.setOrder([
  BOTTOM_RIGHT,
  BOTTOM_CENTRE,
  MIDDLE_RIGHT,
  BOTTOM_LEFT,
  TOP_LEFT,
  TOP_CENTRE,
  TOP_RIGHT,
  CENTRE,
  MIDDLE_LEFT,
]);
game.print();

module.exports = {
  Game,
};
