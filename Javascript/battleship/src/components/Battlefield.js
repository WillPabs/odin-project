import Shipyard from './Shipyard';

const Battlefield = (board, attackList) => {
  const element = document.createElement('div');
  element.classList.add('battlefield');

  const label = document.createElement('div');
  label.classList.add('battlefield-label');

  element.appendChild(label);
  element.appendChild(board.element);
  element.appendChild(attackList.element);
  element.appendChild(Shipyard());

  const setLabel = (text) => {
    label.textContent = text;
  };

  return {
    element,
    board,
    attackList,
    setLabel,
  };
};

export default Battlefield;
