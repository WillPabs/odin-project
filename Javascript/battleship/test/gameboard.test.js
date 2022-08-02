import Gameboard from "../src/gameboard";
import Ship from '../src/ship';

let board;
let ship;

beforeEach(() => {
    board = Gameboard(10);
    ship = Ship(4);
})

test('Gameboard size is constructor param squared', () => {
    const size = board.size.length * board.size[0].length;
    expect(size).toBe(100);
});

test('Attacks is initialized and empty', () => {
    expect(board.missedAttacks).toBeDefined();
    expect(board.missedAttacks).toEqual([]);
})

test('placeShip takes coords and places ship length on board', () => {
    board.placeShip(ship, {x: 0, y: 0});
    expect(board.size[0][0]).toBe(ship);
})

test('receiveAttack function will miss. Coords on board will stay undefined and missedAttack will be pushed the coords', () => {
    board.receiveAttack({ x: 0, y: 0});
    expect(board.size[0][0]).toBeUndefined();
    expect(board.missedAttacks[0]).toEqual({ x: 0, y: 0 });
});

test('receiveAttack function will hit ship', () => {
    board.placeShip(ship, { x: 1, y: 1 }, 'vertical');
    board.receiveAttack({ x: 1, y: 1 });
    expect(board.size[1][1].hitArray[0]).toBeTruthy();
});

test('receiveAttack function will hit a horizontal ship', () => {
    board.placeShip(ship, { x: 3, y: 5 });
    board.receiveAttack({ x: 3, y: 7 });
    expect(board.size[3][7].hitArray[2]).toBeTruthy();
});

test('receiveAttack function will hit a vertical ship', () => {
    board.placeShip(ship, { x: 2, y: 2 }, 'vertical');
    board.receiveAttack({ x: 3, y: 2 });
    expect(board.size[3][2].hitArray[1]).toBeTruthy();
});