const SearchBar = () => {
  const container = document.createElement('div');
  container.classList.add('search-bar-container');

  const searchInput = document.createElement('input');
  searchInput.classList.add('search-bar');
  searchInput.id = 'search';
  searchInput.type = 'search';
  searchInput.placeholder = 'Search City or Zip Code';

  const searchIcon = document.createElement('img');
  searchIcon.classList.add('search-icon');

  container.appendChild(searchInput);
  container.appendChild(searchIcon);
  return container;
};

export default SearchBar;
