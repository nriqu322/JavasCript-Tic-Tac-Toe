import './master.css';
// import displayController from './displayController';
import gameBoard from './gameBoard';

const gameStart = () => {
  document.getElementById('players-form').onsubmit = () => {
    gameBoard.submitBtn();
    return false;
  };
};

gameStart();