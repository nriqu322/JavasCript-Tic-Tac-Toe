
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

  const callBoard = () => {
    for(let i = 0; i < 9 ; i++){
      cell = document.getElementById(`cell-${i}`);
      cell.addEventListener('click', () => {
        cell.innerHTML = 'X';
      });
    }
  }

  return { renderCell, callBoard };

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
    displayController.callBoard();
    document.getElementById('form-container').remove();

    /*
    for (let i = 0; i < 9 ; i++){
      if(i % 2 == 0){
        playerOnePlay();
      }else{
        playerTwoPlay();
      }
    }
    */

    return  false ;
  };

  const makeMove = (cell) => {
    cell.innerHTML = 'X' ;
  };
})();

const gameBoard = (() => {

})();
