const Gameboard = (factor) => {
    let obj = Object.create(gameboardFunctions);
    obj.size = factor**2;
    obj.attacks = [];
    return obj;
}

const gameboardFunctions = {
    placeShip(ship, coords) {

    },
    receiveAttack(coords) {

    },
    allShipsSunk() {

    }
}

export default Gameboard;