const Player = (name, symbol, score = 0) => {
  return { name, symbol, score };
};

const displayController = (() => {
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
      cell[i].addEventListener('click', () => {
        if (cell[i].innerHTML == '') {
          if (countMarks % 2 == 0) {
            cell[i].innerHTML = player1.symbol;
          } else {
            cell[i].innerHTML = player2.symbol;
          }
          countMarks += 1;
        }
      });
    }
  };

  document.getElementById('players-form').onsubmit = () => {
    const pname1 = document.getElementById('player1');
    const pname2 = document.getElementById('player2');

    const player1 = Player(pname1, 'X');
    const player2 = Player(pname2, 'O');
    renderCell();
    mark(player1, player2);
    document.getElementById('form-container').remove();
    return false;
  };

  return {
    renderCell, getCells, mark, countMarks,
  };
})();

const gameFlow = (() => {
  let player1 = Player('kaka', 'x');
  let player2 = Player('koko', 'o');

  // displayController.mark(player1, player2);
  // displayController.renderCell();
})();

const gameBoard = (() => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWins = () => {
    const cell = Array.from(document.querySelectorAll('.cell'));
    console.log(cell);
    if (displayController.countMarks === 8) {
      alert('It\'s a tie');
    }
    if (displayController.countMarks >= 4) {
      if (
        cell[0] === 'X'
        && cell[1] === 'X'
        && cell[2] === 'X'
      ) {
        alert('winner X');
      }
    }
  };

})();
