const AttackList = (board) => {
  const { ships } = board;

  const element = document.createElement('div');
  element.classList.add('attack-list');
  console.log(ships);

  ships.forEach((ship) => {
    const { length } = ship;
    const shipHitArray = document.createElement('div');
    shipHitArray.classList.add('ship');
    shipHitArray.dataset.id = ship.id;
    shipHitArray.classList.add(`length-${length}`);

    let index = 1;
    ship.hitArray.forEach(() => {
      const shipPart = document.createElement('div');
      shipPart.classList.add('ship-part');
      shipPart.classList.add(`part-${index}`);
      index += 1;
      shipHitArray.appendChild(shipPart);
    });

    element.appendChild(shipHitArray);
  });

  const render = () => {
    ships.forEach((ship) => {
      ship.hitArray.forEach((part) => {
        const shipPart = document.querySelector('.ship-part');
        shipPart.innerHTML = part;
        console.log(shipPart);
        console.log(part);
      });
    });
  };

  const update = (id) => {
    const ship = document.querySelector(`.ship[data-id='${id}']`);
    const found = [...ship.children].find((part) => !part.classList.contains('hit'));
    found.classList.add('hit');
  };
  return {
    element,
    render,
    update,
  };
};

export default AttackList;
