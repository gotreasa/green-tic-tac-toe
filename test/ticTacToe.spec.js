const { Game } = require('../src/ticTacToe');
const { INITIAL_GRID, FULL_GRID, EMPTY_GRID } = require('./fixtures/scenarios');
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
} = require('../src/constants');

describe('The game is played on a grid that is 3 squares by 3 squares', () => {
  test('should print an empty grid at the start of the game', () => {
    const game = new Game();
    const initialGame = game.print();
    expect(initialGame).toEqual(INITIAL_GRID);
  });
  test('should have an empty grid at the start', () => {
    const game = new Game();
    const emptyGrid = game.getGrid();
    expect(emptyGrid).toEqual(EMPTY_GRID);
  });
  test.skip('the grid is printed after every round', () => {
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
    game.fillSquares();
    const result = game.print();
    expect(result).toEqual(FULL_GRID);
  });
});
describe('The order of the squares filled is predetermined', () => {
  test('should match the order passed in', () => {
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
    expect(game.order).toEqual([
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
  });
  test('should match two moves of Xs and Os according to their order', () => {
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
    game.move();
    game.move();
    expect(game.squares).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', 'X']);
  });
  test('should throw error if the order has repeated elements', () => {
    const game = new Game();
    expect(() => game.setOrder([
      BOTTOM_RIGHT,
      BOTTOM_CENTRE,
      BOTTOM_CENTRE,
      BOTTOM_LEFT,
      TOP_LEFT,
      TOP_CENTRE,
      TOP_RIGHT,
      CENTRE,
      MIDDLE_LEFT,
    ])).toThrow(Error('Err'));
  });
});
