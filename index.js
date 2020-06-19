const displayController = (() => {
  const brd = document.getElementById('board');
  const renderCell = () => {
    for (let i = 0; i < 9; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell', 'col-4', 'border');
      cell.id = `cell-${i}`;
      brd.appendChild(cell);
    }
  };
  return { renderCell };
})();

const Player = (name, symbol, score = 0) => {
  return { name, symbol, score };
};

const gameFlow = (() => {
  let player1;
  let player2;
  let score1;
  let score2;

  document.getElementById('players-form').onsubmit = () => {
    const pname1 = document.getElementById('player1').value;
    const pname2 = document.getElementById('player2').value;

    player1 = Player(pname1, 'X', score1);
    player2 = Player(pname2, 'O', score2);
    displayController.renderCell();
    document.getElementById('form-container').remove();

    return  false ;
  };

  const makeMove = () => {
    document.getElementById('cell-0').innerHTML = 'X' ;
  };

  document.getElementById('cell-0').addEventListener('click', makeMove);



})();

const gameBoard = (() => {

})();
