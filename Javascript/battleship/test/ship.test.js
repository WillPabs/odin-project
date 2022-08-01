import Ship from '../src/ship.js';

const ship = Ship(3);

test('Ship has length of 3', () => {
    expect(ship.length).toBe(3);
});

test('Ship hitArray is equal to length', () => {
    expect(ship.hitArray.length).toBe(3);
});

test('isSunk function returns true if all values of hitArray are true', () => {
    expect(ship.isSunk()).toBeTruthy();
});