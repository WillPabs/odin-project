const CreatePlayer = () => {
  const container = document.createElement('div');
  container.classList.add('create-player-container');

  const label = document.createElement('label');
  label.classList.add('create-player-label');
  label.textContent = 'Enter Player Name';

  const input = document.createElement('input');
  input.classList.add('player-name-input');
  input.type = 'text';

  container.appendChild(label);
  container.appendChild(input);

  return container;
};

export default CreatePlayer;
