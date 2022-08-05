const AttackList = (board) => {
  const { ships } = board;

  const container = document.createElement('div');
  container.classList.add('attack-list');
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

    container.appendChild(shipHitArray);
  });
  return container;
};

export default AttackList;
