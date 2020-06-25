const Player = (name, symbol, score = 0) => ({ name, symbol, score });

const gameBoard = (() => {
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
      cell.classList.add('cell', 'col-4', 'border');
      cell.id = `cell-${i}`;
      board.appendChild(cell);
    }
  };

  const getCells = () => {
    const cell = document.querySelectorAll('.cell');
    return cell;
  };

  const displayPlayers = (player1, player2) => {
    const p1 = document.querySelector('.dis-player1');
    const p2 = document.querySelector('.dis-player2');

    const pName1 = document.createElement('div');
    pName1.classList.add('p1name');
    pName1.innerHTML = player1.name;

    const pSymbol1 = document.createElement('div');
    pSymbol1.classList.add('p1symbol');
    pSymbol1.textContent = player1.symbol;

    const pScore1 = document.createElement('div');
    pScore1.classList.add('p1score');
    pScore1.textContent = player1.score;

    p1.appendChild(pName1);
    p1.append(pSymbol1);
    p1.appendChild(pScore1);
    p1.style.display = 'block';

    const pName2 = document.createElement('div');
    pName2.classList.add('p1name');
    pName2.innerHTML = player2.name;

    const pSymbol2 = document.createElement('div');
    pSymbol2.classList.add('p2symbol');
    pSymbol2.textContent = player2.symbol;

    const pScore2 = document.createElement('div');
    pScore2.classList.add('p2score');
    pScore2.textContent = player2.score;

    p2.appendChild(pName2);
    p2.append(pSymbol2);
    p2.appendChild(pScore2);
    p2.style.display = 'block';
  };


  const updateScore = (currentPlayer, player1) => {
    if (currentPlayer === player1) {
      const pScore1 = document.querySelector('.p1score');
      pScore1.textContent = currentPlayer.score;
    } else {
      const pScore2 = document.querySelector('.p2score');
      pScore2.textContent = currentPlayer.score;
    }
  };

  return {
    winCombos, renderCell, getCells, displayPlayers, updateScore,
  };
})();

const displayController = (() => {
  let message;
  let check = false;
  let countMarks = 0;
  let currentPlayer;
  let messageContainer;
  let newButton;
  let resetButton;

  const checkWins = (cell) => {
    gameBoard.winCombos.forEach((combo) => {
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

        countMarks = 0;

        messageContainer = document.querySelector('.message');
        messageContainer.style.display = 'flex';

        message = document.querySelector('.result-message');
        message.textContent = `${currentPlayer.name} wins the game`;
        currentPlayer.score += 1;

        newButton = document.querySelector('.new-game');
        newButton.textContent = 'New Game';

        resetButton = document.querySelector('.reset-game');
        resetButton.textContent = 'Reset Game';

        document.getElementById('new-game').addEventListener('click', () => {
          const cell = gameBoard.getCells();
          for (let i = 0; i < 9; i += 1) {
            cell[i].textContent = '';
            cell[i].classList.remove('win');
          }
          document.querySelector('.message').style.display = 'none';
        });

        document.getElementById('reset-game').addEventListener('click', () => {
          window.location.reload();
        });
      }
    });
  };

  const checkTie = (countMarks) => {
    if (countMarks === 9) {
      messageContainer = document.querySelector('.message');
      messageContainer.style.display = 'flex';

      message = document.querySelector('.result-message');
      message.textContent = 'It\'s a Tie';

      newButton = document.querySelector('.new-game');
      newButton.textContent = 'New Game';

      resetButton = document.querySelector('.reset-game');
      resetButton.textContent = 'Reset Game';

      countMarks = 0;

      document.getElementById('new-game').addEventListener('click', () => {
        const cell = gameBoard.getCells();
        for (let i = 0; i < 9; i += 1) {
          cell[i].textContent = '';
          cell[i].classList.remove('win');
        }
        document.querySelector('.message').style.display = 'none';
      });

      document.getElementById('reset-game').addEventListener('click', () => {
        window.location.reload();
      });
    }
  };

  const resetGame = () => {
  };

  const getPlayersData = () => {
    const pname1 = document.getElementById('player1').value;
    const pname2 = document.getElementById('player2').value;
    const player1 = Player(pname1, 'X');
    const player2 = Player(pname2, 'O');
    return [player1, player2];
  };

  const playerMove = () => {
    const players = getPlayersData();
    const player1 = players[0];
    const player2 = players[1];
    gameBoard.displayPlayers(player1, player2);
    const cell = gameBoard.getCells();

    for (let i = 0; i < 9; i += 1) {
      // eslint-disable-next-line no-loop-func
      cell[i].addEventListener('click', () => {
        if (!check) {
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
        }
        displayController.checkWins(cell);
        gameBoard.updateScore(currentPlayer, player1);
        displayController.checkTie(countMarks);
      });
    }
  };

  const submitBtn = () => {
    gameBoard.renderCell();
    playerMove();
    const form = document.getElementById('players-form');
    form.style.display = 'none';
  };

  return {
    checkWins, checkTie, getPlayersData, submitBtn, playerMove,
  };
})();

const gameFlow = (() => {
  document.getElementById('players-form').onsubmit = () => {
    displayController.submitBtn();
    return false;
  };

  // displayController.playerMove(player1, player2);
  // displayController.renderCell();
})();
