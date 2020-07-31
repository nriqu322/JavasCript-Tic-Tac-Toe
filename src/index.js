import './master.css';
import displayController from './displayController';
import gameBoard from './gameBoard';
import Player from './player';

let player1;
let player2;

const getPlayersData = () => {
  const pname1 = document.getElementById('player1').value;
  const pname2 = document.getElementById('player2').value;
  player1 = Player(pname1, 'X');
  player2 = Player(pname2, 'O');
  return [player1, player2];
};

const clearDomBoard = () => {
  document.getElementById('new-game').addEventListener('click', () => {
    const cell = displayController.getCells();
    for (let i = 0; i < 9; i += 1) {
      cell[i].textContent = '';
      cell[i].classList.remove('win');
    }
    document.querySelector('.message').style.display = 'none';
    gameBoard.resetBoard();
  });
};

clearDomBoard();

const setGame = () => {
  const cell = displayController.getCells();

  for (let i = 0; i < 9; i += 1) {
    // eslint-disable-next-line no-loop-func
    cell[i].addEventListener('click', () => {
      if (cell[i].textContent === '') {
        if (gameBoard.countMarks % 2 === 0) {
          cell[i].textContent = player1.symbol;
          gameBoard.playerMove(player1, i);
          gameBoard.currentPlayer = player1;
        } else {
          cell[i].textContent = player2.symbol;
          gameBoard.playerMove(player2, i);
          gameBoard.currentPlayer = player2;
        }
        gameBoard.countMarks += 1;
      }
      displayController.updateStyle(gameBoard.currentPlayer, player1);

      if (gameBoard.checkWins() === true) {
        displayController.gameOverMessage(`${gameBoard.currentPlayer.name} wins`);
        gameBoard.resetBoard();
        gameBoard.resetGame();
        gameBoard.currentPlayer.score += 1;
        gameBoard.countMarks = 0;
      }

      if (gameBoard.checkTie(gameBoard.countMarks)) {
        displayController.gameOverMessage('It\'s a tie');
        gameBoard.resetBoard();
        gameBoard.resetGame();
        gameBoard.countMarks = 0;
      }

      displayController.updateScore(gameBoard.currentPlayer, player1);
    });
  }
};

const submitBtn = () => {
  displayController.renderCell(gameBoard.getBoard());
  const players = getPlayersData();
  const player1 = players[0];
  const player2 = players[1];
  displayController.displayPlayers(player1, player2);
  setGame();
  const form = document.getElementById('players-form');
  form.style.display = 'none';
};

const gameStart = () => {
  document.getElementById('players-form').onsubmit = () => {
    submitBtn();
    return false;
  };
};

gameStart();