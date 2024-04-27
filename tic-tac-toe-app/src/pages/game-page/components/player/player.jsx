import React, { useState } from "react";
import "./player.css";

export default function Player({ initialName, symbol, isActive, onPlayerNameChange }) {
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, setPlayerName] = useState(initialName);

  function handleEdit() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      onPlayerNameChange(symbol, playerName.toUpperCase());
    }
  }

  function handlePlayerName(e) {
    setPlayerName(e.target.value);
  }

  let className = "Player";

  if (isActive) {
    className += " active";
  }

  return (
    <li className={className}>
      {isEditing ? (
        <input
          id="player-input"
          type="text"
          value={playerName}
          defaultValue={initialName}
          onChange={handlePlayerName}
          required
        />
      ) : (
        <span id="player-name">{playerName}</span>
      )}
      <h1 id="player-symbol">{symbol}</h1>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
