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
    // don't let ship drop if busy is true
    const busy = checkIfBusy(ev.target, dragged.dataset.length);
    if (busy) return;
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

  const checkIfBusy = (target, length) => {
    console.log(target);
    const x = Number(target.firstChild.dataset.x);
    const y = Number(target.firstChild.dataset.y);
    for (let i = 0; i < length; i += 1) {
      const left = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y + i - 1}']`);
      const right = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y + i + 1}']`);
      const up = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y + i}']`);
      const down = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y + i}']`);
      const lud = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y + i - 1}']`);
      const lld = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y + i - 1}']`);
      const rud = document.querySelector(`.cell-content[data-x='${x + 1}'][data-y='${y + i + 1}']`);
      const rld = document.querySelector(`.cell-content[data-x='${x - 1}'][data-y='${y + i + 1}']`);
      if (i === 0) {
        console.log(up);
        console.log(left);
        console.log(down);
        console.log(lud);
        console.log(lld);
        if (up.classList.contains('cell-busy')
            || left.classList.contains('cell-busy')
            || down.classList.contains('cell-busy')
            || lud.classList.contains('cell-busy')
            || lld.classList.contains('cell-busy')) { return true; }
      } else if (i === length - 1) {
        if (up.classList.contains('cell-busy')
        || right.classList.contains('cell-busy')
        || down.classList.contains('cell-busy')
        || rud.classList.contains('cell-busy')
        || rld.classList.contains('cell-busy')) { return true; }
      } else if (up.classList.contains('cell-busy')
        || down.classList.contains('cell-busy')) { return true; } else { return false; }
    }
    // loop through shiplength
    // if beginning cell only check up, left, down, left upper and lower diagonal
    // checks x+1; y-1; x-1; x+1, y-1; x-1, y-1;
    // if end cell only check up, right, down, right upper and lower diagonal
    // checks x+1; y+1; x-1; x+1, y+1; x-1, y+1;
    // else check up, down
    // checks x+1, x-1
  };

  return {
    start,
    dragover,
    drop,
  };
};

export default Drag;
