import Drag from './drag';

const setUp = (board) => {
  console.log('setting up');
  document.querySelector('.rival').classList.add('wait');
  const drag = Drag(board);
  document.querySelectorAll('.ship-box').forEach((ship) => ship.addEventListener('dragstart', drag.start));
  document.querySelectorAll('.self .cell').forEach((cell) => cell.addEventListener('dragover', drag.dragover));
  document.querySelectorAll('.self .cell').forEach((cell) => cell.addEventListener('drop', drag.drop));
};

export default setUp;
