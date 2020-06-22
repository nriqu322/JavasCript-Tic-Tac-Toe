
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
    return cell ;
  }

  const formSubmission = document.getElementById('players-form').onsubmit = () => {
    renderCell();
    document.getElementById('form-container').remove();
    return  false ;
  };

  getCells().addEventListener('click', (() => {
    console.log('yay');
  }))

  return { renderCell, getCells };

})();

const Player = (name, symbol, score = 0) => {
  return { name, symbol, score };
};

const gameFlow = (() => {

  let player1 = Player('kaka', 'x');
  let player2 = Player('koko', 'x');



})();

const gameBoard = (() => {

})();
