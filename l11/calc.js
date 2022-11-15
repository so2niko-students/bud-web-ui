function calc(x, y, operator) {
  if (operator === "+") return x + y;
  if (operator === "-") return x - y;
  if (operator === "*") return x * y;
  if (operator === "/") return x / y;
}
console.log(calc(2, 3, "*"));

function isSolved(board) {
  function checkHor() {
    //undefined, 1, 2
    let result;
    board.forEach(function (item) {
      if (item[0] != 0 && item[0] == item[1] && item[0] == item[2])
        result = item[0];
    });
    return result;
  }

  function checkVer() {
    //undefined, 1, 2
    for (let a = 0; a < 3; a++) {
      if (
        board[0][a] != 0 &&
        board[0][a] == board[1][a] &&
        board[1][a] == board[2][a]
      )
        return board[0][a];
    }
  }

  function checkA1() {
    //undefined, 1, 2
    const isMiddleNonZero = board[1][1] != 0;
    const isMainDiagSolve =
      board[0][0] == board[1][1] && board[1][1] == board[2][2];
    const isSecondDiagSolve =
      board[0][2] == board[1][1] && board[1][1] == board[2][0];

    if (isMiddleNonZero && (isMainDiagSolve || isSecondDiagSolve))
      return board[1][1];
  }

  function gameOver() {
    for (let x = 0; x < 3; x++)
      for (let y = 0; y < 3; y++) if (board[x][y] == 0) return -1;

    return 0;
  }

  return checkHor() || checkVer() || checkA1() || gameOver();
}
//----------------------------------------------------------------------------
function isSolved(board) {
  const getWins = makeGetWins(board);
  return getWins(1) ? 1 : getWins(2) ? 2 : emptySlots(board) ? -1 : 0;
}

const makeGetWins = board => key =>
  [
    horizontalWin(board, key),
    verticalWin(board, key),
    leftDiagWin(board, key),
    rightDiagWin(board, key),
  ].some(_ => Boolean(_));

const emptySlots = board => board.flat().some(_ => _ === 0);

const horizontalWin = (board, key) =>
  board.map(x => x.every(_ => _ === key)).some(_ => Boolean(_));

const verticalWin = (board, key) => horizontalWin(rotateBoard(board), key);

const leftDiagWin = (board, key) =>
  [0, 1, 2]
    .map((winIdx, rowIdx) => board[rowIdx][winIdx] === key)
    .every((_) => Boolean(_));

const rightDiagWin = (board, key) =>
  [2, 1, 0]
    .map((winIdx, rowIdx) => board[rowIdx][winIdx] === key)
    .every((_) => Boolean(_));

const rotateBoard = (board) =>
  Array(board[0].length)
    .fill(null)
    .map((x, idx) => board.map((_) => _[idx]));

console.log(
  isSolved([
    [0, 1, 1],
    [0, 2, 2],
    [2, 1, 0],
  ])
);
