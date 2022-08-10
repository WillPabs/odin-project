import ShipComponent from './Ship';
import Ship from '../ship';

const Battlefield = (board, attackList) => {
  const element = document.createElement('div');
  element.classList.add('battlefield');

  element.appendChild(board.element);
  element.appendChild(attackList.element);
  element.appendChild(ShipComponent(Ship(2)));

  return {
    element,
    board,
    attackList,
  };
};

export default Battlefield;
