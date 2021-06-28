const { Game } = require('../src/ticTacToe');
const {
  INITIAL_GRID, EMPTY_GRID, SECOND_MOVE, X_VERTICAL_WIN,
} = require('./fixtures/scenarios');
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

describe('Scenario 1: Player X Won with vertical line!', () => {
  test('should print two moves of Xs and Os according to their order', () => {
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
    expect(game.print()).toEqual(SECOND_MOVE);
  });
  test('should declare X a winner if X in TOP_LEFT, MIDDLE_LEFT, and BOTTOM_LEFT', () => {
    const game = new Game();
    game.setOrder([
      BOTTOM_LEFT,
      CENTRE,
      TOP_LEFT,
      BOTTOM_RIGHT,
      MIDDLE_LEFT,
    ]);
    expect(game.play()).toEqual(X_VERTICAL_WIN);
  });
});
