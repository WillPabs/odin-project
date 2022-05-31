TicTacToe

USE CASE Description

1. A player is prompted to enter their name and pick a marker. The other player gets assigned the other marker. One of the players is chosen at random to be the first player. Player one selects a cell on the gameboard. The selected cell is marked with that player's marker. Then it is player two's turn to select a cell on the gameboard. That cell is then marked with that respective player's marker. This repeats until there is a winner, signified by a player's marker consecutively appearing diagonally, vertically, or horizontally, or until the board is full. If the board is full and there is no winner, a prompt will appear asking to play again.

Triggers

1. A player enters their name and marker

Actors
    
1. Player
2. Gameboard
3. GameFlowControl

Preconditions

1. 2 players are available
2. A board is available  

Goals

1. A player wins by consecutively matching their respective marker diagonally, vertically, or horizontally.

Steps of Execution

1. Player one enters their name and preferred marker.
2. Player two enters their name and gets the other marker.
3. Player one clicks a cell from the board.
4. If the cell is empty, the cell is filled with player one's marker
5. If the cell is not empty, player one will be prompted to pick another cell
6. The game will check if player one is a winner 
7. Player two then gets to click a cell
8. If the same condition above for player one is satisfied, the cell will be filled with player two's marker
9. The game will check if player two is a winner
10. The game will check if the board is full
11. Repeat from step 5
