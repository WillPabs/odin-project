// Gameboard object : module pattern
    // gameboard is an array
const Gameboard = (function() {
    let gameboard;
    console.log("Starting game");

    const reset = () => {
        gameboard = Array.from(Array(3), () => new Array(3));
        console.log('Reset game board');
    };

    const displayGameboard = () => {
        
    }

    return {
        reset
    };
})();

Gameboard.reset();


// Player object : factoryFunction pattern
const playerFactory = (name) => {
    let wins = 0;
    const getName = () => name;

    return {
        getName
    }
}

const will = playerFactory('will')
console.log(will.getName());


// Game Flow Control object : module pattern