
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
    let cell = document.querySelectorAll('.cell');
    return cell;
  }

  const mark = (player1, player2) => {
    let cell = getCells();
    let j = 0;
    for (let i = 0; i < 9; i++) {
      cell[i].addEventListener('click', () => {
        if(cell[i].innerHTML == ''){
          if(j % 2 == 0){
            cell[i].innerHTML = player1.symbol ;
          } else {
            cell[i].innerHTML = player2.symbol ;
          }
          j++;
        }
      })
    }
  }

  document.getElementById('players-form').onsubmit = () => {
    renderCell();
    document.getElementById('form-container').remove();
    return  false ;
  };

  return { renderCell, getCells, mark };

})();

const Player = (name, symbol, score = 0) => {
  return { name, symbol, score };
};

const gameFlow = (() => {

  let player1 = Player('kaka', 'x');
  let player2 = Player('koko', 'o');

  displayController.mark(player1);

})();

const gameBoard = (() => {

})();
