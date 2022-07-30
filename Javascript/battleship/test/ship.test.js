import Ship from '../src/ship.js';

test('Ship has length of 3', () => {
    expect(Ship(3).length).toBe(3);
});