import gameBoard from '../src/gameBoard';
import Player from '../src/player';

const player1 = Player('Luis', 'X');
const player2 = Player('Test', 'O');

test('Shoul be an empty board before start playing', () => {
  expect(gameBoard.getBoard()).toEqual(['', '', '', '', '', '', '', '', '']);
});

test('Clear board to keep playing', () => {
  gameBoard.playerMove(player1, 1);

  expect(gameBoard.resetBoard()).toBe(true);
  expect(gameBoard.getBoard()).toEqual(['', '', '', '', '', '', '', '', '']);
});

test('Board should have the player move', () => {
  gameBoard.resetBoard();
  gameBoard.playerMove(player1, 1);
  gameBoard.playerMove(player2, 3);

  expect(gameBoard.getBoard()).toEqual(['', 'X', '', 'O', '', '', '', '', '']);
});

test('Return true if there is a winner in row 1', () => {
  gameBoard.resetBoard();
  gameBoard.playerMove(player1, 0);
  gameBoard.playerMove(player2, 3);
  gameBoard.playerMove(player1, 1);
  gameBoard.playerMove(player2, 4);
  gameBoard.playerMove(player1, 2);

  expect(gameBoard.checkWins()).toBe(true);
  expect(gameBoard.getBoard()).toEqual(['X', 'X', 'X', 'O', 'O', '', '', '', '']);
});

test('Return true if there is a winner in column 1', () => {
  gameBoard.resetBoard();
  gameBoard.playerMove(player1, 0);
  gameBoard.playerMove(player2, 4);
  gameBoard.playerMove(player1, 3);
  gameBoard.playerMove(player2, 8);
  gameBoard.playerMove(player1, 6);

  expect(gameBoard.checkWins()).toBe(true);
  expect(gameBoard.getBoard()).toEqual(['X', '', '', 'X', 'O', '', 'X', '', 'O']);
});

test('Return true if there is a winner in diagonal', () => {
  gameBoard.resetBoard();
  gameBoard.playerMove(player1, 0);
  gameBoard.playerMove(player2, 3);
  gameBoard.playerMove(player1, 4);
  gameBoard.playerMove(player2, 5);
  gameBoard.playerMove(player1, 8);

  expect(gameBoard.checkWins()).toBe(true);
  expect(gameBoard.getBoard()).toEqual(['X', '', '', 'O', 'X', 'O', '', '', 'X']);
});

test('Return false if there is no winner', () => {
  gameBoard.resetBoard();
  gameBoard.playerMove(player1, 0);
  gameBoard.playerMove(player2, 3);
  gameBoard.playerMove(player1, 1);
  gameBoard.playerMove(player2, 4);

  expect(gameBoard.checkWins()).toBe(false);
  expect(gameBoard.getBoard()).toEqual(['X', 'X', '', 'O', 'O', '', '', '', '']);
});

test('Return true if there is a tie, ocuppied spaces equal to 9. Return false otherwise', () => {
  gameBoard.resetBoard();
  const countMarks1 = 9;

  expect(gameBoard.checkTie(countMarks1)).toBe(true);
});

test('Return false if no tie', () => {
  gameBoard.resetBoard();
  const countMarks2 = 8;

  expect(gameBoard.checkTie(countMarks2)).toBe(false);
});