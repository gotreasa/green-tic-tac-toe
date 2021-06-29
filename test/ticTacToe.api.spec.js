const {
  BOTTOM_RIGHT, TOP_LEFT,
} = require('../src/constants');
const { Game } = require('../src/ticTacToe');
const { newGame } = require('../src/newGame.controller');

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

  test('should return a winning vertical line for player X', () => {
    expect(newGame()).toBe({
      result: 'X',
      moves: [(
        {
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
        },
        {
          player: 'X',
          grid: {
            topLeft: ' ',
            topCentre: ' ',
            topRight: ' ',
            middleLeft: ' ',
            middleCentre: ' ',
            middleRight: ' ',
            bottomLeft: 'X',
            bottomCentre: ' ',
            bottomRight: ' ',
          },
        },
        {
          player: 'O',
          grid: {
            topLeft: ' ',
            topCentre: ' ',
            topRight: ' ',
            middleLeft: ' ',
            middleCentre: 'O',
            middleRight: ' ',
            bottomLeft: 'X',
            bottomCentre: ' ',
            bottomRight: ' ',
          },
        },
        {
          player: 'X',
          grid: {
            topLeft: 'X',
            topCentre: ' ',
            topRight: ' ',
            middleLeft: ' ',
            middleCentre: 'O',
            middleRight: ' ',
            bottomLeft: 'X',
            bottomCentre: ' ',
            bottomRight: ' ',
          },
        },
        {
          player: 'O',
          grid: {
            topLeft: 'X',
            topCentre: ' ',
            topRight: ' ',
            middleLeft: ' ',
            middleCentre: 'O',
            middleRight: ' ',
            bottomLeft: 'X',
            bottomCentre: ' ',
            bottomRight: 'O',
          },
        },
        {
          player: 'X',
          grid: {
            topLeft: 'X',
            topCentre: ' ',
            topRight: ' ',
            middleLeft: 'X',
            middleCentre: 'O',
            middleRight: ' ',
            bottomLeft: 'X',
            bottomCentre: ' ',
            bottomRight: 'O',
          },
        }
      )],
    });
  });
});
