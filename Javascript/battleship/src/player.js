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
        const attackableCells = [];
        const cells = gameboard.size;
        for (let i = 0; i < cells.length; i++) {
            for (let j = 0; j < cells[0].length; j++) {
                const coords = Coords(i, j);
                const position = gameboard.calculateShipPosition(coords);
                if (cells[i][j] === undefined || !cells[i][j].hitArray[position]) {
                    attackableCells.push(coords);
                }
            }
        }
        const length = cells.length;
        let x = Math.floor(Math.random() * length);
        let y = Math.floor(Math.random() * length);
        let newCoords = Coords(x, y);
        console.log(attackableCells[0]);
        console.log(newCoords);
        let stop = 0;
        let correct = false;
        let found = attackableCells.find(({x, y}) => { x === newCoords.x && y === newCoords.y});
        console.log(found)
        while (found === undefined) {
            x = Math.floor(Math.random() * length);
            y = Math.floor(Math.random() * length);
            found = Coords(x, y);
            // console.log(`${JSON.stringify(newCoords)} : ${JSON.stringify(found)}`)
            console.log('not found');
        }
        console.log('found')
        // if (attackableCells.find(cell => {
        //     cell.x === newCoords.x && cell.y === newCoords.y;
        //     // console.log(`cell: ${cell.x},${cell.y} newCoords: ${newCoords.x},${newCoords.y}`)
        // })) {
        //     console.log(newCoords)
        // }  else {
        //     console.log('Not found')
        // }
        // while(!correct) {
        //     newCoords.x = Math.floor(Math.random() * length);
        //     newCoords.y = Math.floor(Math.random() * length);
        //     if (attackableCells.includes(newCoords)) {console.log(newCoords);correct = true}
        // }
        // while (!attackableCells.includes(check => {
        //     check.x === newCoords.x && check.y === newCoords.y;
        // })) {
        //     if (stop === 5) break;
        //     console.log(newCoords);
        //     newCoords.x = Math.floor(Math.random() * length);
        //     newCoords.y = Math.floor(Math.random() * length);
        //     stop++;
        // }
        // const coords = { x: x, y: y };
        gameboard.receiveAttack(newCoords);
    }
}

export default Player;