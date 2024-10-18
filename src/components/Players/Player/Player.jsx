import { useState } from "react";
import PlayerInput from "../PlayerInput";

import "./Player.css";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  const handleClick = () => {
    setIsEditing((prevIsEditingState) => !prevIsEditingState);

    if (isEditing) {
      onChangeName(symbol, name);
    }
  };

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        <PlayerInput
          className="player-name"
          name={name ?? initialName}
          isEditing={isEditing}
          setName={setName}
        />
        <span className="player-symbol" />
        {symbol}
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
