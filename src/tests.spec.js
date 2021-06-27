const { Game } = require('./ticTacToe');
const { INITIAL_GRID, FULL_GRID, EMPTY_GRID } = require('./fixtures/scenarios');

describe('The game is played on a grid that is 3 squares by 3 squares', () => {
  test('the grid is empty at the start with information', () => {
    const game = new Game();
    const initialGame = game.print();
    expect(initialGame).toEqual(INITIAL_GRID);
  });
  test('the grid is empty at the start without information', () => {
    const game = new Game();
    const emptyGrid = game.getGrid();
    expect(emptyGrid).toEqual(EMPTY_GRID);
  });
  test('the grid is printed after every round', () => {
    const game = new Game();
    game.setOrder([8, 7, 5, 6, 0, 1, 2, 4, 3]);
    game.fillSquares();
    const result = game.print();
    expect(result).toEqual(FULL_GRID);
  });
});
describe('The order of the squares filled is predetermined', () => {
  test('the order can be passed in', () => {
    const game = new Game();
    game.setOrder([8, 7, 5, 6, 0, 1, 2, 4, 3]);
    expect(game.order).toEqual([8, 7, 5, 6, 0, 1, 2, 4, 3]);
  });
  test('the Xs and Os are filled in according to the order', () => {
    const game = new Game();
    game.setOrder([8, 7, 5, 6, 0, 1, 2, 4, 3]);
    game.fillSquares();
    expect(game.squares).toEqual(['X', 'O', 'X', 'X', 'O', 'X', 'O', 'O', 'X']);
  });
});
