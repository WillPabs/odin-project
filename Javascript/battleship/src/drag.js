const Drag = (board) => {
  let dragged = null;

  const start = (ev) => {
    dragged = ev.target;
  };

  const dragover = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.setData('text', ev.target.dataset.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    if (ev.target.classList.contains('cell')) {
      console.log(ev.target);
      console.log(dragged);
      const { target } = ev;
      board.placeShip(target, dragged);
    }
  };

  return {
    start,
    dragover,
    drop,
  };
};

export default Drag;
