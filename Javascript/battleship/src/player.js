const Player = (name) => {
    let obj = Object.create(playerFunctions);
    obj.name = name;
    return obj;
}

const playerFunctions = {
    attack(x, y, gameboard) {
        const coords = { x: x, y: y };
        gameboard.receiveAttack(coords);
    }
}

export default Player;