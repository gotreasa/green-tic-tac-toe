const INITIAL_GRID = `Game Board Creation…
 | | 
-+-+-
 | | 
-+-+-
 | | 
Board Created.
The game will start with player X`;
const EMPTY_GRID = ` | | 
-+-+-
 | | 
-+-+-
 | | `;

const SECOND_MOVE = `Player O:
 | | 
-+-+-
 | | 
-+-+-
 |O|X`;

const X_VERTICAL_WIN = `Game Board Creation…
 | | 
-+-+-
 | | 
-+-+-
 | | 
Board Created.
The game will start with player X

Player X:
 | | 
-+-+-
 | | 
-+-+-
X| | 

Player O:
 | | 
-+-+-
 |O| 
-+-+-
X| | 

Player X:
X| | 
-+-+-
 |O| 
-+-+-
X| | 

Player O:
X| | 
-+-+-
 |O| 
-+-+-
X| |O

Player X:
X| | 
-+-+-
X|O| 
-+-+-
X| |O

PLAYER X WON!
`;

module.exports = {
  EMPTY_GRID,
  INITIAL_GRID,
  SECOND_MOVE,
  X_VERTICAL_WIN,
};
