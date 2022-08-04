# Battleship

### Entities
- Ship
    - length
    - hitArray
        - array containing booleans if ship was hit in a specific position
    - isSunk()
        - checks if hitArray is all true
    - hit(num)
        - takes a number and then marks that position as ‘hit’
- Gameboard
    - size
    - attacks
        - keeps track of all attacks
    - placeShip(ship, coords)
        - will place a ship at a specific location on the board
    - receiveAttack(coords)
        - checks whether or not the attack hit a ship and then sends the hit function to the correct ship, or records the coordinates of the missed shot
    - allShipsSunk()
        - returns true if all ships on gameboard have been sunk
- Player
    - name
    - attack(coords)
        - return coords

### Components
- CreatePlayer
    - section that prompts a player to input their name and creates a player
- Gameboard
    - renders as an N x N grid
    - can place ships on grid with click
    - can attack a cell on board with click
- AttackList
    - displays ships hitArrays if hit or not

Game Flow Logic
- player has option to play against AI or another player
- when player presses play, game loop will start
- game loop starts by greying out player's own board to bring focus to enemy board. Player will then proceed to click a cell on the board. The clicked cell will change to an X if hit or a dot if miss. Player's turn ends on click. Now begins other player's turn. This logic repeats until all ships of one board is sunk.
