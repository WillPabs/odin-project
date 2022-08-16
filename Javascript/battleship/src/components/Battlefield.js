import Shipyard from './Shipyard';

const Battlefield = (board, attackList) => {
  const element = document.createElement('div');
  element.classList.add('battlefield');

  const shipyard = Shipyard();
  element.appendChild(board.element);
  element.appendChild(attackList.element);
  element.appendChild(shipyard);

  return {
    element,
    board,
    attackList,
  };
};

export default Battlefield;
