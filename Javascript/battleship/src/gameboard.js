import Coords from './coords';

const Gameboard = (factor) => {
  const obj = Object.create(gameboardFunctions);
  obj.size = Array.from(Array(factor), () => (Array(factor)));
  obj.missedAttacks = [];
  obj.ships = [];
  return obj;
};

const gameboardFunctions = {
  placeShip(ship, coords, direction = 'horizontal') {
    if (direction === 'vertical' && coords.x + ship.length > this.size.length) {
      throw Error('Ship out of bounds');
    }
    if (direction === 'horizontal' && coords.y + ship.length > this.size[0].length) {
      throw Error('Ship out of bounds');
    }
    this.ships.push(ship);
    for (let i = 0; i < ship.length; i++) {
      direction === 'horizontal'
        ? this.size[coords.x][coords.y + i] = ship
        : this.size[coords.x + i][coords.y] = ship;
    }
  },
  receiveAttack(coords) {
    const ship = this.size[coords.x][coords.y];
    if (ship) {
      const position = this.calculateShipPosition(coords);
      ship.hit(position);
    } else {
      this.missedAttacks.push(coords);
    }
  },
  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  },
  calculateShipPosition(coords) {
    let { x } = coords;
    let { y } = coords;
    const start = { x, y };
    let position = 0;
    if (x - 1 >= 0 && x + 1 < this.size.length) {
      if (this.size[x - 1][y] !== undefined) {
        while (x >= 0 && this.size[x][y] !== undefined) {
          start.x = x;
          x--;
        }
        if (coords.x !== start.x) position = coords.x - start.x;
      }
    }
    if (y - 1 >= 0 && y + 1 < this.size[0].length && x >= 0 && x < this.size.length) {
      if (this.size[x][y - 1] !== undefined) {
        while (y >= 0 && this.size[x][y] !== undefined) {
          start.y = y;
          y--;
        }
        if (coords.y !== start.y) position = coords.y - start.y;
      }
    }
    return position;
  },
  getAttackableCells() {
    const attackableCells = [];
    const cells = this.size;
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[0].length; j++) {
        const coords = Coords(i, j);
        const position = this.calculateShipPosition(coords);
        if (cells[i][j] === undefined || !cells[i][j].hitArray[position]) {
          attackableCells.push(coords);
        }
      }
    }
    return attackableCells;
  },
};

export default Gameboard;
