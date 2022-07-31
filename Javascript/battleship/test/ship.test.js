import Ship from '../src/ship.js';

test('Ship has length of 3', () => {
    expect(Ship(3).length).toBe(3);
});

test('Ship hitArray is equal to length', () => {
    expect(Ship(3).hitArray.length).toBe(3);
});