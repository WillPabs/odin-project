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
    let shipLength = dragged.dataset.length;
    let newTarget = ev.target;
    while (shipLength > 0) {
      if (!newTarget) return;
      newTarget = newTarget.nextSibling;
      shipLength -= 1;
    }
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
