import Coords from "./coords";

const Player = (name) => {
    let obj = Object.create(playerFunctions);
    obj.name = name;
    return obj;
}

const playerFunctions = {
    attack(x, y, gameboard) {
        const coords = { x: x, y: y };
        gameboard.receiveAttack(coords);
    },
    botAttack(gameboard) {
        const attackableCells = gameboard.getAttackableCells();
        const length = gameboard.size.length;
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        let newCoords = Coords(x, y);
        let found = attackableCells.find(cell => JSON.stringify(cell) === JSON.stringify(newCoords));
        while (found === undefined) {
            let newX = Math.floor(Math.random() * length);
            let newY = Math.floor(Math.random() * length);
            newCoords = Coords(newX, newY);
            found = attackableCells.find(({x, y}) => { x === newCoords.x && y === newCoords.y});
        }
        gameboard.receiveAttack(found);
        return found;
    }
}

export default Player;