# Notes

**Labels**
✅ done  
🚧 WIP  
❌ ERROR  
TODO:  

## Backlog

**Executable BOT**  
Desc: As a game observer, I want to see a TicTacToe game played on the console between two BOTs, so that
I can understand how it works.  

UAT:  
Given an executable TicTacToe game,  
when the game is launched via shell script,  
then is printed on the shell console the game flow without any delay between the moves.

## Pomodoro 1  

Scenario 1: Player X Won with vertical line!  
Player X:
X| |  
-+-+-  
X|O|  
-+-+-  
X| |O  
PLAYER X WON!  

GIVEN player X  
WHEN he puts all markers in a vertical line  
THEN he wins  

- ✅should print an empty grid at the start of the game  
- ✅should have an empty grid at the start
- ✅should throw error if the order has repeated elements  


## Pomodoro 2

- ✅should print two moves  

## Pomodoro 3

- ✅refactor the print function into parts
- ✅create a function to get player
- should declare X a winner if X in TOP_LEFT, MIDDLE_LEFT, and BOTTOM_LEFT

## Pomodo 4  

- ✅should declare X a winner if X in TOP_LEFT, MIDDLE_LEFT, and BOTTOM_LEFT
- update the class to execute the game
- create Docker file to run programme
- Update Travis to build the Docker file
- Update Travis to run the programme
- Work on scenario 3 - the draw

Scenario 2: Player O won with a horizontal line!  
Player O:  
X| |X  
-+-+-  
O|O|O  
-+-+-  
X| |  
PLAYER O WON!  

GIVEN player O  
WHEN he puts all markers in a horizontal line  
THEN he wins  

- should declare O a winner if O in MIDDLE_LEFT, CENTRE and MIDDLE_RIGHT

Scenario 3: Game ends with a draw!  
Player X:  
X|O|X  
-+-+-  
O|O|X  
-+-+-  
X|X|O  
GAME ENDS WITH A DRAW!  

GIVEN player X  
AND player O  
WHEN they don't form any lines  
THEN they draw  

- should declare a draw when neither player has won and there are no more moves left

# Part 2

## Desc

As a game portal developer, I want to get a TicTacToe game played between two BOTs, so that I can
spike around how to use the JSON game to create a web TicTacToe version of it.

## UAT

GIVEN a TicTacToe API,
WHEN a new game is requested via /api/TicTacToe/newGame,
THEN is provided to the requester a JSON with a game played in BOT mode.

## API Pomodoro 1

API Scenario 1: Player 1 wins with a vertical line
GIVEN a system
WHEN it calls the newGame API
THEN it receives the result of player X winning with a vertical line

- ✅should get initial move with empty grid

## API Pomodoro 2

- should get initial move with player set to blank
- should get a move with player set to X and grid with X placed
- should return a winning vertical line for player X
