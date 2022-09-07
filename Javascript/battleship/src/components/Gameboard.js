import Coords from '../coords';
import Ship from '../ship';

const GameboardComponent = (gameboard) => {
  const element = document.createElement('div');
  element.classList.add('gameboard');

  const boardGrid = document.createElement('table');
  boardGrid.classList.add('grid');

  const tableHead = document.createElement('thead');

  const lettersRow = document.createElement('tr');
  lettersRow.classList.add('row');
  const { length } = gameboard.size;
  const letterCodePoint = 65;
  for (let i = 0; i <= length; i += 1) {
    const th = document.createElement('th');
    th.scope = 'col';
    if (i !== 0) th.textContent = `${String.fromCodePoint(letterCodePoint + i - 1)}`;
    lettersRow.appendChild(th);
  }

  tableHead.appendChild(lettersRow);

  const tableBody = document.createElement('tbody');

  for (let i = 0; i < gameboard.size.length; i += 1) {
    const row = document.createElement('tr');
    row.classList.add('row');
    row.id = `row-${i}`;

    const th = document.createElement('th');
    th.scope = 'row';
    th.textContent = i + 1;
    row.appendChild(th);

    for (let j = 0; j < gameboard.size[0].length; j += 1) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      const content = document.createElement('div');
      content.classList.add('cell-content');
      content.dataset.x = i;
      content.dataset.y = j;
      cell.appendChild(content);

      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }

  boardGrid.appendChild(tableHead);
  boardGrid.appendChild(tableBody);

  element.appendChild(boardGrid);

  const placeShip = (target, dragged) => {
    const content = target.firstChild;
    content.appendChild(dragged);
    const shipLength = Number(dragged.dataset.length);
    for (let i = 0; i < shipLength; i += 1) {
      target.classList.add('cell-busy');
      target = target.nextSibling;
    }
  };

  const changeCell = (x, y, target) => {
    gameboard.size[x][y] === undefined ? target.classList.add('cell-miss') : target.classList.add('cell-hit');
  };

  const receiveAttack = (player, target) => {
    let x;
    let y;
    let newTarget;

    if (target) {
      newTarget = target;
      if (!newTarget.classList.contains('cell-miss') && !newTarget.classList.contains('cell-hit')) {
        ({ x } = newTarget.children[0].dataset);
        ({ y } = newTarget.children[0].dataset);
        player.attack(x, y, gameboard);
      }
    } else {
      ({ x, y } = player.botAttack(gameboard));
      newTarget = document.querySelector(`.cell-content[data-x='${x}'][data-y='${y}']`).parentNode;
    }
    changeCell(x, y, newTarget);
    return { x, y };
  };

  const placeAllShips = () => {
    const ships = element.querySelectorAll('.ship-box');
    ships.forEach((ship) => {
      const shipLength = Number(ship.dataset.length);
      const newShip = Ship(shipLength);
      const parent = ship.parentNode;
      const x = Number(parent.dataset.x);
      const y = Number(parent.dataset.y);
      const coords = Coords(x, y);
      gameboard.placeShip(newShip, coords);
    });
  };

  return {
    element,
    gameboard,
    placeShip,
    receiveAttack,
    placeAllShips,
  };
};

export default GameboardComponent;
