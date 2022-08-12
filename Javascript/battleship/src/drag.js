const Drag = (board) => {
  let dragged = null;

  const start = (ev) => {
    dragged = ev.target;
    let shipLength = dragged.dataset.length;
    let newTarget = ev.target.parentNode.parentNode;
    if (dragged.parentNode.parentNode.classList.contains('cell-busy')) {
      while (shipLength > 0) {
        newTarget.classList.remove('cell-busy');
        newTarget = newTarget.nextSibling;
        shipLength -= 1;
      }
    }
    ev.dataTransfer.setData('text', ev.target.dataset.id);
  };

  const dragover = (ev) => {
    ev.preventDefault();
  };

  const drop = (ev) => {
    ev.preventDefault();
    let shipLength = dragged.dataset.length;
    let newTarget = ev.target;
    while (shipLength > 0) {
      if (!newTarget) return;
      if (newTarget.classList.contains('cell-busy')) return;
      newTarget = newTarget.nextSibling;
      shipLength -= 1;
    }
    if (ev.target.classList.contains('cell')) {
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
