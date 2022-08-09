const AttackList = (board) => {
  const { ships } = board;

  const element = document.createElement('div');
  element.classList.add('attack-list');
  console.log(ships);

  ships.forEach((ship) => {
    const shipHitArray = document.createElement('div');
    shipHitArray.classList.add('ship');
    ship.hitArray.forEach((part) => {
      const shipPart = document.createElement('div');
      shipPart.classList.add('ship-part');
      shipPart.textContent = part;
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
  return {
    element,
    render,
  };
};

export default AttackList;
