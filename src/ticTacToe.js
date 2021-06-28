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

const getPlayer = (input) => (input % 2 === 0 ? 'X' : 'O');
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
    this.squares[squareIndex] = getPlayer(this.index);
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
    return `Player ${getPlayer(this.index - 1)}:
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

  hasVerticalLine() {
    return [this.squares[MIDDLE_LEFT], this.squares[BOTTOM_LEFT]].every(
      (element) => ((this.squares[TOP_LEFT] !== ' ') ? element === this.squares[TOP_LEFT] : false),
    );
  }

  getOutcome() {
    if (this.hasVerticalLine()) {
      this.index = 9;
      return `\nPLAYER ${getPlayer(this.index - 1)} WON!`;
    }
    return '';
  }

  play(input = '') {
    let output = input;
    output += `\n${this.print()}`;
    output += '\n';
    output += this.getOutcome();
    this.move();
    if (this.index < 9) {
      return this.play(output);
    }
    return output;
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
