import ShipComponent from './Ship';
import Ship from '../ship';

const Shipyard = () => {
  const element = document.createElement('div');
  element.classList.add('shipyard');

  const len1Container = document.createElement('div');
  len1Container.classList.add('ships_len1');

  const ship_len1_1 = ShipComponent(Ship(1)).element;
  const ship_len1_2 = ShipComponent(Ship(1)).element;
  const ship_len1_3 = ShipComponent(Ship(1)).element;
  const ship_len1_4 = ShipComponent(Ship(1)).element;

  const len2Container = document.createElement('div');
  len2Container.classList.add('ships_len2');

  const ship_len2_1 = ShipComponent(Ship(2)).element;
  const ship_len2_2 = ShipComponent(Ship(2)).element;
  const ship_len2_3 = ShipComponent(Ship(2)).element;

  const len3Container = document.createElement('div');
  len3Container.classList.add('ships_len3');

  const ship_len3_1 = ShipComponent(Ship(3)).element;
  const ship_len3_2 = ShipComponent(Ship(3)).element;

  const len4Container = document.createElement('div');
  len4Container.classList.add('ships_len4');

  const ship_len4_1 = ShipComponent(Ship(4)).element;

  len1Container.appendChild(ship_len1_1);
  len1Container.appendChild(ship_len1_2);
  len1Container.appendChild(ship_len1_3);
  len1Container.appendChild(ship_len1_4);

  len2Container.appendChild(ship_len2_1);
  len2Container.appendChild(ship_len2_2);
  len2Container.appendChild(ship_len2_3);

  len3Container.appendChild(ship_len3_1);
  len3Container.appendChild(ship_len3_2);

  len4Container.appendChild(ship_len4_1);

  element.appendChild(len1Container);
  element.appendChild(len2Container);
  element.appendChild(len3Container);
  element.appendChild(len4Container);

  return element;
};

export default Shipyard;
