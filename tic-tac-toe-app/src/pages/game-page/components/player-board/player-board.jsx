import Player from "../player/player";
import { PLAYER } from "../../game-page";
import "./player-board.css";

export default function PlayerBoard({ activePlayer, onPlayerNameChange }) {
  return (
    <div className="PlayerBoard">
      <ol>
        <Player
          initialName={PLAYER.X}
          symbol="X"
          isActive={activePlayer === "X"}
          onPlayerNameChange={onPlayerNameChange}
        ></Player>
        <Player
          initialName={PLAYER.O}
          symbol="O"
          isActive={activePlayer === "O"}
          onPlayerNameChange={onPlayerNameChange}
        ></Player>
      </ol>
    </div>
  );
}
