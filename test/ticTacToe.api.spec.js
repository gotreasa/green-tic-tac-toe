const { BOTTOM_RIGHT, TOP_LEFT } = require('../src/constants');
const { Game } = require('../src/ticTacToe');

describe('API Scenario 1: Player 1 wins with a vertical line', () => {
  test('should get initial move with empty grid', () => {
    const game = new Game();
    expect(game.getMove()).toEqual({
      player: ' ',
      grid: {
        topLeft: ' ',
        topCentre: ' ',
        topRight: ' ',
        middleLeft: ' ',
        middleCentre: ' ',
        middleRight: ' ',
        bottomLeft: ' ',
        bottomCentre: ' ',
        bottomRight: ' ',
      },
    });
  });

  test('should get a move with player set to O and grid with X and O placed', () => {
    const game = new Game();
    game.setOrder([TOP_LEFT, BOTTOM_RIGHT]);
    game.move();
    game.move();
    expect(game.getMove()).toEqual({
      player: 'O',
      grid: {
        topLeft: 'X',
        topCentre: ' ',
        topRight: ' ',
        middleLeft: ' ',
        middleCentre: ' ',
        middleRight: ' ',
        bottomLeft: ' ',
        bottomCentre: ' ',
        bottomRight: 'O',
      },
    });
  });
});
