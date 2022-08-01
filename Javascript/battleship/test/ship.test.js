import Ship from '../src/ship.js';

let ship;
beforeEach(() => {
    ship = Ship(3); 
});

test('Ship has length of 3', () => {
    expect(ship.length).toBe(3);
});

test('Ship hitArray is equal to length', () => {
    expect(ship.hitArray.length).toBe(3);
});

test('isSunk function returns false', () => {
    expect(ship.isSunk()).toBeFalsy();
});

test('hit function takes number param and sets that index on hitArray to true', () => {
    ship.hit(0);
    expect(ship.hitArray[0]).toBeTruthy();
})

test('isSunk function returns true', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBeTruthy();
})