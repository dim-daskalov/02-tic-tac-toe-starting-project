import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import RootLayout from "./components/Layout/RootLayout";
import GameLayout from "./components/Layout/GameLayout";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { INITIAL_PLAYERS } from "./constants";
import { extractActivePlayer, extractGameBoard, extractWinner } from "./utils";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(INITIAL_PLAYERS);

  const activePlayer = extractActivePlayer(gameTurns);

  const gameBoard = extractGameBoard(gameTurns);

  const winner = extractWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = extractActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handlePlayerNameChange = (playerSymbol, newName) => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = { ...prevPlayers, [playerSymbol]: newName };

      return updatedPlayers;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

  return (
    <RootLayout>
      <GameLayout>
        <Players
          activePlayer={activePlayer}
          onChangeName={handlePlayerNameChange}
        />
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematch={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </GameLayout>
      <Log turns={gameTurns} />
    </RootLayout>
  );
};

export default App;
