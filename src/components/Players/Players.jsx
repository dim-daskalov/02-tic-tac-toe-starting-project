import Player from "./Player";
import { INITIAL_ACTIVE_PLAYER, INITIAL_PLAYERS } from "../../constants";

import "./Players.css";

const Players = ({ activePlayer, onChangeName }) => {
  return (
    <ol id="players" className="highlight-player">
      <Player
        initialName={INITIAL_PLAYERS.X}
        symbol={INITIAL_ACTIVE_PLAYER}
        isActive={activePlayer === INITIAL_ACTIVE_PLAYER}
        onChangeName={onChangeName}
      />
      <Player
        initialName={INITIAL_PLAYERS.O}
        symbol={Object.keys(INITIAL_PLAYERS)[1]}
        isActive={activePlayer === Object.keys(INITIAL_PLAYERS)[1]}
        onChangeName={onChangeName}
      />
    </ol>
  );
};

export default Players;
