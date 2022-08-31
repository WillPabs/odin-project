import Coords from './coords';
import Ship from './ship';

const Gameboard = (factor) => {
  const obj = Object.create(gameboardFunctions);
  obj.size = Array.from(Array(factor), () => (Array(factor)));
  obj.missedAttacks = [];
  obj.successfulAttacks = [];
  obj.ships = [];
  return obj;
};

const gameboardFunctions = {
  placeShip(ship, coords, direction = 'horizontal') {
    if (direction === 'vertical' && Number(coords.x) + Number(ship.length) > this.size.length + 1) {
      throw Error('Ship out of bounds');
    }
    if (direction === 'horizontal' && Number(coords.y) + Number(ship.length) > this.size[0].length + 1) {
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
      this.successfulAttacks.push(coords);
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
    
    // vertically placed ships
    // if (x - 1 >= 0 && x + 1 < this.size.length) {
    //   console.log(`x: ${x}`)
    //   if (this.size[x - 1][y] !== undefined) {
    //     while (x >= 0 && this.size[x][y] !== undefined) {
    //       start.x = x;
    //       x--;
    //     }
    //     if (coords.x !== start.x) position = coords.x - start.x;
    //   }
    // }

    // horizontally placed ships
    if (y - 1 >= 0 && y < this.size.length) {
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
  generateShips() {
    const ship1L_1 = Ship(1);
    const ship1L_2 = Ship(1);
    const ship1L_3 = Ship(1);
    const ship1L_4 = Ship(1);

    const ship2L_1 = Ship(2);
    const ship2L_2 = Ship(2);
    const ship2L_3 = Ship(2);

    const ship3L_1 = Ship(3);
    const ship3L_2 = Ship(3);

    const ship4L_1 = Ship(4);

    const coords1 = Coords(0, 0);
    const coords2 = Coords(0, 2);
    const coords3 = Coords(0, 4);
    const coords4 = Coords(0, 6);
    const coords5 = Coords(2, 0);
    const coords6 = Coords(4, 0);
    const coords7 = Coords(6, 0);
    const coords8 = Coords(3, 3);
    const coords9 = Coords(5, 6);
    const coords10 = Coords(9, 3);

    this.placeShip(ship1L_1, coords1);
    this.placeShip(ship1L_2, coords2);
    this.placeShip(ship1L_3, coords3);
    this.placeShip(ship1L_4, coords4);

    this.placeShip(ship2L_1, coords5);
    this.placeShip(ship2L_2, coords6);
    this.placeShip(ship2L_3, coords7);

    this.placeShip(ship3L_1, coords8);
    this.placeShip(ship3L_2, coords9);

    this.placeShip(ship4L_1, coords10);
  },
};

export default Gameboard;
