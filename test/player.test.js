import Player from '../src/player';

const player1 = Player('Luis', 'X');
const player2 = Player('Test', 'O');

test('Return the name of the player1', () => {
  expect(player1.name).toBe('Luis');
});

test('Player2 name shouldn\'t be Luis', () => {
  expect(player2.name).not.toBe('Luis');
});

test('Return the symbol of the player1', () => {
  expect(player1.symbol).toBe('X');
});

test('Player2 symbol shouldn\'t be X', () => {
  expect(player2.symbol).not.toBe('X');
});