import {
  INITIAL_ACTIVE_PLAYER,
  INITIAL_GAME_BOARD,
  WINNING_COMBINATIONS,
} from "./constants";

export const extractActivePlayer = (gameTurns) => {
  let activePlayer = INITIAL_ACTIVE_PLAYER;

  if (gameTurns.length && gameTurns[0].player === INITIAL_ACTIVE_PLAYER) {
    activePlayer = "O";
  }

  return activePlayer;
};

export const extractGameBoard = (gameTurns) => {
  const gameBoard = [
    ...INITIAL_GAME_BOARD.map((nestedArray) => [...nestedArray]),
  ];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

export const extractWinner = (gameBoard, players) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const [firstWinningSymbol, secondWinningSymbol, thirdWinningSymbol] =
      combination.map(({ row, column }) => gameBoard[row][column]);

    if (
      firstWinningSymbol &&
      firstWinningSymbol === secondWinningSymbol &&
      firstWinningSymbol === thirdWinningSymbol
    ) {
      winner = players[firstWinningSymbol].toUpperCase();
      break;
    }
  }

  return winner;
};
