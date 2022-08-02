const Gameboard = (factor) => {
    let obj = Object.create(gameboardFunctions);
    obj.size = Array.from(Array(factor), () => (Array(factor)));
    obj.missedAttacks = [];
    obj.ships = [];
    return obj;
}

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
            direction === 'horizontal' ? 
                this.size[coords.x][coords.y + i] = ship :
                this.size[coords.x + i][coords.y] = ship;
        }
    },
    receiveAttack(coords) {
        let ship = this.size[coords.x][coords.y];
        if (ship) {
            const position = this.calculateShipPosition(coords);
            ship.hit(position);
        } else {
            this.missedAttacks.push(coords);
        }
    },
    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    },
    calculateShipPosition(coords) {
        let x = coords.x;
        let y = coords.y;
        let start = { x: x, y: y };
        let position = 0;
        if (x - 1 >= 0 && x + 1 < this.size.length) {
            if (this.size[x - 1][y] !== undefined) {
                while(x >= 0 && this.size[x][y] !== undefined) {
                    start.x = x;
                    x--;
                }
                if (coords.x !== start.x) position = coords.x - start.x;
            }
        }
        if (y - 1 >= 0 && y + 1 < this.size[0].length) {
            if (this.size[x][y - 1] !== undefined) {
                while(y >= 0 && this.size[x][y] !== undefined) {
                    start.y = y;
                    y--;
                }
                if (coords.y !== start.y) position = coords.y - start.y;
            }
        }
        return position;
    }
}

export default Gameboard;