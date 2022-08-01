const Gameboard = (factor) => {
    let obj = Object.create(gameboardFunctions);
    obj.size = Array.from(Array(factor), () => (Array(factor)));
    obj.attacks = [];
    return obj;
}

const gameboardFunctions = {
    placeShip(ship, coords) {
        this.size[coords.x][coords.y] = ship;
    },
    receiveAttack(coords) {
        const position = this.size[coords.x][coords.y];
        if (position) {
            position.hit(0);
        } else {
            this.attacks = coords;
        }
    },
    allShipsSunk() {

    }
}

export default Gameboard;