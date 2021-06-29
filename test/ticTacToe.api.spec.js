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
});
