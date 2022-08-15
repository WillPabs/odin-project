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
    const busy = checkIfBusy(ev.target, dragged.dataset.length);
    console.log(busy);
    if (busy) return;
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

  const checkDirection = (x, y, i) => {
    const directions = [];
    const left = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y + i - 1}']`);
    const right = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y + i + 1}']`);
    const down = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y + i}']`);
    const up = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y + i}']`);
    const lld = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y + i - 1}']`);
    const lud = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y + i - 1}']`);
    const rld = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y + i + 1}']`);
    const rud = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y + i + 1}']`);
    if (x === 0 && y === 0) {
      directions.push(down);
      directions.push(right);
      directions.push(rld);
    } else if (x === 0 && y === 9) {
      directions.push(left);
      directions.push(down);
      directions.push(lld);
    } else if (x === 9 && y === 0) {
      directions.push(up);
      directions.push(right);
      directions.push(rud);
    } else if (x === 9 && y === 9) {
      directions.push(left);
      directions.push(up);
      directions.push(lud);
    } else if (x === 0 && (y > 0 && y < 9)) {
      directions.push(left);
      directions.push(lld);
      directions.push(down);
      directions.push(rld);
      directions.push(right);
    } else if (y === 0 && (x > 0 && x < 9)) {
      directions.push(up);
      directions.push(rud);
      directions.push(right);
      directions.push(rld);
      directions.push(down);
    } else if (x === 9 && (y > 0 && y < 9)) {
      directions.push(left);
      directions.push(lud);
      directions.push(up);
      directions.push(rud);
      directions.push(right);
    } else if (y === 9 && (x > 0 && x < 9)) {
      directions.push(up);
      directions.push(lud);
      directions.push(left);
      directions.push(lld);
      directions.push(down);
    } else {
      directions.push(up);
      directions.push(down);
      directions.push(left);
      directions.push(right);
      directions.push(lud);
      directions.push(lld);
      directions.push(rud);
      directions.push(rld);
    }
    return directions;
  };

  const checkIfBusy = (target, length) => {
    console.log(target);
    let x;
    let y;
    let id;
    if (target.classList.contains('ship-box')) {
      x = Number(target.parentNode.dataset.x);
      y = Number(target.parentNode.dataset.y);
      id = Number(target.parentNode.dataset.id);
    } else {
      x = Number(target.firstChild.dataset.x);
      y = Number(target.firstChild.dataset.y);
      id = Number(target.firstChild.dataset.id);
    }

    for (let i = 0; i < length; i += 1) {
      const directions = checkDirection(x, y, i);
      for (let j = 0; j < directions.length; j += 1) {
        const direction = directions[j].parentNode;
        console.log(direction);
        if (direction.classList.contains('cell-busy')) { return true; }
      }
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
