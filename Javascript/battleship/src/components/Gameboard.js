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
    const ship = Ship(shipLength);
    const x = Number(content.dataset.x);
    const y = Number(content.dataset.y);
    const coords = Coords(x, y);
    gameboard.placeShip(ship, coords);
    for (let i = 0; i < shipLength; i += 1) {
      target.classList.add('cell-busy');
      target = target.nextSibling;
    }
  };

  return {
    element,
    gameboard,
    placeShip,
  };
};

export default GameboardComponent;
