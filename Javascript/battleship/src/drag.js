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
    ev.dataTransfer.setData('text', ev.target.id);
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
      if (checkIfBusy(newTarget)) return;
      newTarget = newTarget.nextSibling;
      shipLength -= 1;
    }
    if (ev.target.classList.contains('cell')) {
      const { target } = ev;
      board.placeShip(target, dragged);
    }
  };

  const checkDirection = (x, y) => {
    const directions = [];
    const left = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y - 1}']`);
    const right = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y + 1}']`);
    const down = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y}']`);
    const up = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y}']`);
    const lld = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y - 1}']`);
    const lud = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y - 1}']`);
    const rld = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y + 1}']`);
    const rud = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y + 1}']`);
    if (left) directions.push(left);
    if (right) directions.push(right);
    if (down) directions.push(down);
    if (up) directions.push(up);
    if (lld) directions.push(lld);
    if (lud) directions.push(lud);
    if (rld) directions.push(rld);
    if (rud) directions.push(rud);
    return directions;
  };

  const checkIfBusy = (target) => {
    let x;
    let y;
    if (target.classList.contains('ship-box')) {
      x = Number(target.parentNode.dataset.x);
      y = Number(target.parentNode.dataset.y);
    } else {
      x = Number(target.firstChild.dataset.x);
      y = Number(target.firstChild.dataset.y);
    }

    const directions = checkDirection(x, y);
    for (let j = 0; j < directions.length; j += 1) {
      const direction = directions[j].parentNode;
      if (direction.classList.contains('cell-busy')) return true;
    }
    return false;
  };

  return {
    start,
    dragover,
    drop,
  };
};

export default Drag;
