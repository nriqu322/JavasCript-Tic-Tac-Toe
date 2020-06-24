const Player = (name, symbol, score = 0) => ({ name, symbol, score });

const gameBoard = (() => {
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

  return { winCombos };
})();

const displayController = (() => {
  let message;
  let check = false;

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
        message = document.getElementById('result-message');
        message.innerHTML = 'Winner';
        check = true;
      }
    });
  };

  const checkTie = (countMarks) => {
    if (countMarks === 9) {
      message = document.getElementById('result-message');
      message.innerHTML = 'It\'s a Tie';
    }
  };

  let countMarks = 0;
  const board = document.getElementById('board');

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

  const mark = (player1, player2) => {
    const cell = getCells();

    for (let i = 0; i < 9; i += 1) {
      // eslint-disable-next-line no-loop-func
      cell[i].addEventListener('click', () => {
        if (!check) {
          if (cell[i].innerHTML === '') {
            if (countMarks % 2 === 0) {
              cell[i].innerHTML = player1.symbol;
            } else {
              cell[i].innerHTML = player2.symbol;
            }
            countMarks += 1;
          }
        }
        checkWins(cell);
        checkTie(countMarks);
      });
    }
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

  document.getElementById('players-form').onsubmit = () => {
    const pname1 = document.getElementById('player1').value;
    const pname2 = document.getElementById('player2').value;

    const player1 = Player(pname1, 'X');
    const player2 = Player(pname2, 'O');
    displayPlayers(player1, player2);
    renderCell();
    mark(player1, player2);
    document.getElementById('players-form').remove();
    // document.getElementById
    return false;
  };

  return {
    renderCell, getCells, mark, countMarks,
  };
})();

const gameFlow = (() => {


  // displayController.mark(player1, player2);
  // displayController.renderCell();
})();
