import Battlefield from "./components/Battlefield";
import GameboardComponent from "./components/Gameboard";
import Gameboard from "./gameboard";

export const reset = (field1, field2) => {
    const gameboard1 = Gameboard(10);
    const gameboard2 = Gameboard(10);
    gameboard2.generateShips();

    const boardComponent1 = GameboardComponent(gameboard1);
    const boardComponent2 = GameboardComponent(gameboard2);

    field1 = Battlefield(boardComponent1);
    field2 = Battlefield(boardComponent2);
    window.location.reload();
};