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

class Game {
  constructor() {
    this.squares = new Array(9).fill(' ');
  }

  setOrder(order) {
    this.order = order;
  }

  fillSquares() {
    this.order.forEach((value, index) => {
      this.squares[value] = index % 2 === 0 ? 'X' : 'O';
    });
    return this.squares;
  }

  getGrid() {
    return `${this.squares[TOP_LEFT]}|${this.squares[TOP_CENTRE]}|${this.squares[TOP_RIGHT]}
-+-+-
${this.squares[MIDDLE_LEFT]}|${this.squares[CENTRE]}|${this.squares[MIDDLE_RIGHT]}
-+-+-
${this.squares[BOTTOM_LEFT]}|${this.squares[BOTTOM_CENTRE]}|${this.squares[BOTTOM_RIGHT]}`;
  }

  print() {
    this.output = `Game Board Creation…
${this.getGrid()}
Board Created.
The game will start with player X`;
    // for (let i = 0; i < 0; i += 1) {

    // }
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
// game.fillSquares();
game.print();

module.exports = {
  Game,
};
