const gameBoard = (() => {
  let countMarks = 0;
  let currentPlayer;
  let board = ['', '', '', '', '', '', '', '', ''];

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

  const getBoard = () => board;

  const resetGame = () => {
    document.getElementById('reset-game').addEventListener('click', () => {
      window.location.reload();
    });
  };

  const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    countMarks = 0;
    return true;
  };

  const checkWins = () => {
    let response = false;
    winCombos.forEach((combo) => {
      const elem1 = combo[0];
      const elem2 = combo[1];
      const elem3 = combo[2];
      // const cell = displayController.getCells();

      if (
        board[elem1]
        && board[elem1] === board[elem2]
        && board[elem1] === board[elem3]
      ) {
        // cell[elem1].classList.add('win');
        // cell[elem2].classList.add('win');
        // cell[elem3].classList.add('win');
        response = true;
      }
    });
    return response;
  };

  const checkTie = (countMarks) => {
    if (countMarks === 9) {
      return true;
    }
    return false;
  };

  const playerMove = (currentPlayer, i) => {
    board[i] = currentPlayer.symbol;
    return board;
  };

  return {
    playerMove, checkWins, checkTie, currentPlayer, resetBoard, countMarks, resetGame, getBoard,
  };
})();

export default gameBoard;