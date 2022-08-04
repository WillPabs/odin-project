import Player from '../player';

const CreatePlayer = () => {
  const container = document.createElement('div');
  container.classList.add('create-player-container');

  const label = document.createElement('label');
  label.classList.add('create-player-label');
  label.textContent = 'Enter Player Name';

  const input = document.createElement('input');
  input.classList.add('player-name-input');
  input.type = 'text';

  const button = document.createElement('button');
  button.classList.add('player-name-button');
  button.textContent = 'Create';
  button.addEventListener('click', () => {
    const { value } = input;
    const newPlayer = Player(value);
    return newPlayer;
  });

  container.appendChild(label);
  container.appendChild(input);
  container.appendChild(button);

  return container;
};

export default CreatePlayer;
