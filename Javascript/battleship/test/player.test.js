import Player from "../src/player";

test('Player is initalized with a name', () => {
    const player = Player('Will');
    expect(player.name).toEqual('Will');
})