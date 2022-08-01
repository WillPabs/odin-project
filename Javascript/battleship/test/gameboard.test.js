import Gameboard from "../src/gameboard";
import Ship from '../src/ship';

let board;
let ship;

beforeEach(() => {
    board = Gameboard(4);
    ship = Ship(1);
})

test('Gameboard size is constructor param squared', () => {
    const size = board.size.length * board.size[0].length;
    expect(size).toBe(16);
});

test('Attacks is initialized and empty', () => {
    expect(board.attacks).toBeDefined();
    expect(board.attacks).toEqual([]);
})

test('placeShip takes coords and places ship length on board', () => {
    board.placeShip(ship, {x: 0, y: 0});
    expect(board.size[0][0]).toBe(ship);
})

test('receiveAttack function will miss', () => {
    board.receiveAttack({ x: 0, y: 0});
    expect(board.size[0][0]).toBeUndefined();

    board.placeShip(ship, { x: 0, y: 0 });
    board.receiveAttack({ x: 0, y: 0});
    expect(board.size[0][0].hitArray[0]).toBeTruthy();
})