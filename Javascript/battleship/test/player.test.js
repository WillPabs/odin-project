import Player from "../src/player";
import Gameboard from '../src/gameboard';
import Ship from '../src/ship';

test('Player is initalized with a name', () => {
    const player = Player('Will');

    expect(player.name).toEqual('Will');
    expect(typeof player.name).toBe('string');
});

test('Player attacks gameboard and misses', () => {
    const player = Player('Will');
    const board = Gameboard(10);

    player.attack(2, 3, board);

    const actual = board.size[2][3];
    const expected = undefined;
    expect(actual).toBe(expected);
});

test('Player attacks gameboard and hits', () => {
    const player = Player('Will');
    const board = Gameboard(10);
    const ship = Ship(1);

    board.placeShip(ship, {x: 2, y: 3});
    player.attack(2, 3, board);

    const actual = board.size[2][3];
    const expected = ship;
    expect(actual).toBe(expected);
});

test('Player bot attack', () => {
    const player = Player('Will');
    const board = Gameboard(10);

    // player.botAttack(board);    
    
    const actual = board.missedAttacks.length;
    const expected = 1;
    expect(actual).toEqual(expected);    
});

test('Player bot attack hits', () => {
    const player = Player('Will');
    const board = Gameboard(3);  

    for (let i = 0; i < 2; i++) {
        board.placeShip(Ship(2), {x: i, y: 0});
    }
    // console.log(board.size)
    player.botAttack(board);    
    // player.botAttack(board);    
    // player.botAttack(board);    
    // player.botAttack(board);    
    // player.botAttack(board);    
    // player.botAttack(board);    
    // player.botAttack(board);    
    // player.botAttack(board);    
    // player.botAttack(board);    

    // console.log(board.missedAttacks);
    
    const actual = board.missedAttacks.length;
    const expected = 1;
    expect(actual).toEqual(expected);    
});