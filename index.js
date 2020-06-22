const Player = (name, symbol, score = 0) => {
  return { name, symbol, score };
};

const displayController = (() => {

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
    let j = 0;
    for (let i = 0; i < 9; i += 1) {
      cell[i].addEventListener('click', () => {
        if (cell[i].innerHTML == '') {
          if (j % 2 == 0) {
            cell[i].innerHTML = player1.symbol;
          } else {
            cell[i].innerHTML = player2.symbol;
          }
          j += 1;
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

  return { renderCell, getCells, mark };
})();

const gameFlow = (() => {
  let player1 = Player('kaka', 'x');
  let player2 = Player('koko', 'o');

  // displayController.mark(player1, player2);
  // displayController.renderCell();
})();

const gameBoard = (() => {

})();
