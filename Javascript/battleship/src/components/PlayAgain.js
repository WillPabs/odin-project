import { reset } from '../utils';

const PlayAgain = (winner) => {
    const element = document.createElement('div');
    element.classList.add('play-again-modal');

    const text = document.createElement('div');
    text.classList.add('play-again-text');
    text.textContent = `Game Over. ${winner} has won!`;

    const button = document.createElement('button');
    button.classList.add('play-again-button');
    button.textContent = 'Play Again';
    button.addEventListener('click', reset);

    element.appendChild(text);
    element.appendChild(button);

    return element;
}

export default PlayAgain;