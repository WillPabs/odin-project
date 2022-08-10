const ShipComponent = (ship) => {
  const element = document.createElement('div');
  element.classList.add('ship-box');
  element.classList.add('ui-draggable');

  element.draggable = true;

  element.dataset.length = ship.length;

  return element;
};

export default ShipComponent;
