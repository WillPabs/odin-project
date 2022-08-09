const Battlefield = (board, attackList) => {
  const element = document.createElement('div');
  element.classList.add('battlefield');

  element.appendChild(board);
  element.appendChild(attackList);

  return {
    element,
  };
};

export default Battlefield;
