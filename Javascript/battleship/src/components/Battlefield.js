const Battlefield = (board, attackList) => {
  const element = document.createElement('div');
  element.classList.add('battlefield');

  element.appendChild(board.element);
  element.appendChild(attackList.element);

  return {
    element,
    board,
    attackList,
  };
};

export default Battlefield;
