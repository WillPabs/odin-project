import ShipComponent from './Ship';
import Ship from '../ship';

const Shipyard = () => {
  const element = document.createElement('div');
  element.classList.add('shipyard');

  const ship_len1_1 = ShipComponent(Ship(1)).element;
  const ship_len1_2 = ShipComponent(Ship(1)).element;
  const ship_len1_3 = ShipComponent(Ship(1)).element;
  const ship_len1_4 = ShipComponent(Ship(1)).element;

  const ship_len2_1 = ShipComponent(Ship(2)).element;
  const ship_len2_2 = ShipComponent(Ship(2)).element;
  const ship_len2_3 = ShipComponent(Ship(2)).element;

  const ship_len3_1 = ShipComponent(Ship(3)).element;
  const ship_len3_2 = ShipComponent(Ship(3)).element;

  const ship_len4_1 = ShipComponent(Ship(4)).element;

  element.appendChild(ship_len1_1);
  element.appendChild(ship_len1_2);
  element.appendChild(ship_len1_3);
  element.appendChild(ship_len1_4);

  element.appendChild(ship_len2_1);
  element.appendChild(ship_len2_2);
  element.appendChild(ship_len2_3);

  element.appendChild(ship_len3_1);
  element.appendChild(ship_len3_2);

  element.appendChild(ship_len4_1);

  return element;
};

export default Shipyard;
