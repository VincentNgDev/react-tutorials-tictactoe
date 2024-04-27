import React, { useState } from "react";
import GameBoard from "./components/game-board/game-board";
import PlayerBoard from "./components/player-board/player-board";
import GameLog from "./components/game-log/game-log";
import { WINNING_COMBINATIONS } from "./data/winning-combination";
import "./game-page.css";
import GameOver from "./components/game-over/game-over";

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const PLAYER = {
  X: "Player 1",
  O: "Player 2",
};

function derivePlayer(gameTurn) {
  let currentPlayer = "X";

  if (gameTurn.length > 0) {
    if (gameTurn[0].player === "X") currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveWinner(board, playerName) {
  let winner = null;

  for (var combination of WINNING_COMBINATIONS) {
    const firstCell = board[combination[0].row][combination[0].column];
    const secondCell = board[combination[1].row][combination[1].column];
    const thirdCell = board[combination[2].row][combination[2].column];

    if (firstCell && firstCell === secondCell && firstCell === thirdCell) {
      winner = playerName[firstCell];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurn) {
  let board = [...INITIAL_BOARD.map((row) => [...row])];

  gameTurn.map((turn) => {
    const { cell, player } = turn;
    const { row, col } = cell;

    board[row][col] = player;

    return null;
  });

  return board;
}

export default function GamePage() {
  const [gameTurn, setGameTurn] = useState([]);
  const [playerName, setPlayerName] = useState(PLAYER);

  const board = deriveGameBoard(gameTurn);
  const winner = deriveWinner(board, playerName);
  const hasDraw = gameTurn.length === 9 && !winner;

  //#region Handle Function section
  function handleSelectCell(rowIndex, colIndex) {
    setGameTurn((preTurn) => {
      let currentPlayer = "X";

      if (preTurn.length > 0) {
        if (preTurn[0].player === "X") currentPlayer = "O";
      }

      const newTurn = [
        { cell: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preTurn,
      ];

      return newTurn;
    });
  }

  function handleRestart() {
    setGameTurn([]);
  }

  function handlePlayerName(symbol, newName) {
    setPlayerName((preName) => {
      return {
        ...preName,
        [symbol]: newName,
      };
    });
  }
  //#endregion

  return (
    <div className="GamePage">
      <header>
        <img src="game-logo.png" alt="Not Found" />
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <PlayerBoard
          activePlayer={derivePlayer(gameTurn)}
          onPlayerNameChange={handlePlayerName}
        />
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectCell={handleSelectCell} board={board} />
      </main>
      <GameLog turns={gameTurn} />
      <br />
    </div>
  );
}
