import './master.css';
import displayController from './displayController';

const gameStart = () => {
  document.getElementById('players-form').onsubmit = () => {
    displayController.submitBtn();
    return false;
  };
};

gameStart();