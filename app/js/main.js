let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const statusDisplay = document.getElementById('status');
const winningMessage = function () {
  return currentPlayer + " 's Wins"
}
const drawMessage = function () {
  return "Draw!";
}
const currentPlayerTurn = function () {
  return "It's " + currentPlayer + " 's turn";
}

document.querySelectorAll('.cell').forEach(function (cell) {
  cell.addEventListener('click', CellClick);
});

document.querySelector('.restart').addEventListener('click', RestartGame);

function CellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }
  CellPlayed(clickedCell, clickedCellIndex);
}


function CellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}