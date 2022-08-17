import Shipyard from './Shipyard';

const Battlefield = (board) => {
  const element = document.createElement('div');
  element.classList.add('battlefield');

  const label = document.createElement('div');
  label.classList.add('battlefield-label');

  element.appendChild(label);
  element.appendChild(board.element);
  element.appendChild(Shipyard());

  const setLabel = (text) => {
    label.textContent = text;
  };

  const setAttackList = (attackList) => {
    element.appendChild(attackList.element);
  };

  return {
    element,
    board,
    setLabel,
    setAttackList,
  };
};

export default Battlefield;
