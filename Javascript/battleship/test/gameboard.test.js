import Gameboard from "../src/gameboard";

let board;

beforeEach(() => {
    board = Gameboard(4);
})

test('Gameboard size is constructor param squared', () => {
    expect(board.size).toBe(16);
});

test('Attacks is initialized and empty', () => {
    expect(board.attacks).toBeDefined();
    expect(board.attacks).toEqual([]);
})

test('placeShip takes coords and places ship length on board', () => {
    const mockShip = jest.fn({size: 3});
    const coords = [4][4];
    board.placeShip(mockShip, coords);
    expect(board[coords]).toEqual(ship.hitArray);
})