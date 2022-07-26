import UserInfo from './UserInfo';
import Logo from './Logo';
import SearchBar from './SearchBar';

const Header = () => {
  const container = document.createElement('div');
  container.classList.add('header');

  const logo = Logo();
  const search = SearchBar();
  const user = UserInfo();

  container.appendChild(logo);
  container.appendChild(search);
  container.appendChild(user);
  return container;
};

export default Header;
