# TicTacToe
USE CASE Description

A player is prompted to enter their name and pick a marker. The other player gets assigned the other marker. One of the players is chosen at random to be the first player. Player one selects a cell on the gameboard. The selected cell is marked with that player's marker. Then it is player two's turn to select a cell on the gameboard. That cell is then marked with that respective player's marker. This repeats until there is a winner, signified by a player's marker consecutively appearing diagonally, vertically, or horizontally, or until the board is full. If the board is full and there is no winner, a prompt will appear asking to play again.
Triggers

A player enters their name and marker
Actors

Player
Gameboard
GameFlowControl
Preconditions

2 players are available
A board is available
Goals

A player wins by consecutively matching their respective marker diagonally, vertically, or horizontally.
Steps of Execution

Player one enters their name and preferred marker.
Player two enters their name and gets the other marker.
Player one clicks a cell from the board.
If the cell is empty, the cell is filled with player one's marker
If the cell is not empty, player one will be prompted to pick another cell
The game will check if player one is a winner
Player two then gets to click a cell
If the same condition above for player one is satisfied, the cell will be filled with player two's marker
The game will check if player two is a winner
The game will check if the board is full
Repeat from step 5

## Objects

#### Players
- name : String
- marker : String
- selectCell()

#### Gameboard
- gameboard : array
- winningcombos : array
- isGameOver()
- setPosition()
- reset()

#### GameFlowControl
- takeTurn()