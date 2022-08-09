const Battlefield = (board, attackList) => {
  const container = document.createElement('div');
  container.classList.add('battlefield');

  container.appendChild(board);
  container.appendChild(attackList);

  return container;
};

export default Battlefield;
