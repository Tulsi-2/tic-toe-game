const gamecells = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const restart = document.querySelector(".restart");

// making variables

let currentPlayer = "X";
let nextPlayer = "O";
let playerTurn = currentPlayer;

// function to start game

const startGame = () => {
  gamecells.forEach(cell => {
    cell.addEventListener('click', (e) => {
      if (e.target.textContent === '') {
        e.target.textContent = playerTurn;
        if(checkWin()){
            alert(`${playerTurn} is a winner!`)
        }
        else if (checkTie()){
          alert(`It's a tie`)
        }else{
          changeTurn();
        }
      }
    });
  });
};

// function to change player's turn
const changeTurn = () => {
  if (playerTurn == currentPlayer) {
    playerTurn = nextPlayer;
  } else {
    playerTurn = currentPlayer;
  }
};

// function to check win

const checkWin = () => {
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i<winCondition.length; i++) {
    const [pos1, pos2, pos3] = winCondition[i];
    if (
      gamecells[pos1].textContent !== '' &&
      gamecells[pos1].textContent === gamecells[pos2].textContent &&
      gamecells[pos2].textContent === gamecells[pos3].textContent) 
      {
      return true;
    }
    // console.log(`${pos1}${pos2}${pos3}`)
  } 
  return false
};

const checkTie = () =>{
  let emptycells = 0;
  gamecells.forEach(cell =>{
    if(cell.textContent == ''){
      emptycells ++;
    }
  })
  return emptycells === 0 && !checkWin();
}


startGame();
