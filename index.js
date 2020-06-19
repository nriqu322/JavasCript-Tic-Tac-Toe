const gameBoard = (() => {

  const board = () => {
    const createCell = () => {
      const brd = document.getElementById('board');
      for (let i = 0 ; i < 9 ; i++) {
        const cell = document.createElement('div');
        cell.classList.add('col-4');
        cell.id = `cell-${i}`;
        brd.appendChild(cell);
      }
    };
  }

})();

const gameFlow = (() => {

})();

const displayController = (() => {

})();

const Players = (name, symbol, score) => {

};
