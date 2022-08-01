# Battleship

Ship
- length
- hitArray
    - array containing booleans if ship was hit in a specific position
- isSunk()
    - checks if hitArray is all true
- hit(num)
    - takes a number and then marks that position as ‘hit’
Gameboard
- size
- attacks
    - keeps track of all attacks
- placeShip(ship, coords)
    - will place a ship at a specific location on the board
- receiveAttack(coords)
    - checks whether or not the attack hit a ship and then sends the hit function to the correct ship, or records the coordinates of the missed shot
- allShipsSunk()
    - returns true if all ships on gameboard have been sunk
Player
- name
- attack(coords)
    - return coords
