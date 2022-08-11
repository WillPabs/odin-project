const ShipComponent = (ship) => {
  const element = document.createElement('div');
  element.classList.add('ship-box');
  element.classList.add('ui-draggable');

  element.draggable = true;

  element.style.width = `${ship.length * 2}em`;

  element.dataset.id = Math.floor(Math.random() * 1000);

  element.dataset.length = ship.length;

  return element;
};

export default ShipComponent;
