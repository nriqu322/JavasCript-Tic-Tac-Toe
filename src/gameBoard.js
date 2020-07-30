import Player from './player';
import displayController from './displayController';

const gameBoard = (() => {
  let countMarks = 0;
  let currentPlayer;

  const board = document.getElementById('board');
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const renderCell = () => {
    for (let i = 0; i < 9; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell', 'col-4');
      cell.id = `cell-${i}`;
      board.appendChild(cell);
    }
  };

  const getCells = () => {
    const cell = document.querySelectorAll('.cell');
    return cell;
  };

  const getPlayersData = () => {
    const pname1 = document.getElementById('player1').value;
    const pname2 = document.getElementById('player2').value;
    const player1 = Player(pname1, 'X');
    const player2 = Player(pname2, 'O');
    return [player1, player2];
  };

  const resetGame = () => {
    document.getElementById('reset-game').addEventListener('click', () => {
      window.location.reload();
    });
  };

  const resetBoard = () => {
    document.getElementById('new-game').addEventListener('click', () => {
      const cell = getCells();
      for (let i = 0; i < 9; i += 1) {
        cell[i].textContent = '';
        cell[i].classList.remove('win');
      }
      document.querySelector('.message').style.display = 'none';
    });
  };

  const checkWins = (cell) => {
    winCombos.forEach((combo) => {
      const elem1 = combo[0];
      const elem2 = combo[1];
      const elem3 = combo[2];

      if (
        cell[elem1].innerHTML
        && cell[elem1].innerHTML === cell[elem2].innerHTML
        && cell[elem1].innerHTML === cell[elem3].innerHTML
      ) {
        cell[elem1].classList.add('win');
        cell[elem2].classList.add('win');
        cell[elem3].classList.add('win');

        displayController.gameOverMessage(`${currentPlayer.name} wins`);
        resetGame();
        resetBoard();
        currentPlayer.score += 1;
        countMarks = 0;
      }
    });
  };

  const checkTie = (countMarks) => {
    if (countMarks === 9) {
      displayController.gameOverMessage('It\'s a tie');
      resetGame();
      resetBoard();
      countMarks = 0;
    }
  };

  const playerMove = () => {
    const players = getPlayersData();
    const player1 = players[0];
    const player2 = players[1];
    displayController.displayPlayers(player1, player2);
    const cell = getCells();


    for (let i = 0; i < 9; i += 1) {
      // eslint-disable-next-line no-loop-func
      cell[i].addEventListener('click', () => {
        if (cell[i].textContent === '') {
          if (countMarks % 2 === 0) {
            cell[i].textContent = player1.symbol;
            currentPlayer = player1;
          } else {
            cell[i].textContent = player2.symbol;
            currentPlayer = player2;
          }
          countMarks += 1;
        }
        displayController.updateStyle(currentPlayer, player1);
        checkWins(cell);
        displayController.updateScore(currentPlayer, player1);
        checkTie(countMarks);
      });
    }
  };

  const submitBtn = () => {
    renderCell();
    playerMove();
    const form = document.getElementById('players-form');
    form.style.display = 'none';
  };

  return {
    winCombos, renderCell, getCells, playerMove, submitBtn, checkWins, checkTie,
  };
})();

export default gameBoard;