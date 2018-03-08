const scoreCard = document.querySelector('.score');
const playerScoreCard = document.querySelector('#player-score');
const computerScoreCard = document.querySelector('#computer-score');
const roundResultCard = document.querySelector('#round-result');
const finalResultCard = document.querySelector('#final-result');
const restartBtn = document.createElement('button');
restartBtn.textContent = 'Play again!';
let playerScore = 0;
let computerScore = 0;

function computerPlay () {
  let options = ['Rock', 'Paper', 'Scissors'];
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  return computerSelection;
}

function roundRockPaperScissors (computerSelection, playerSelection) {
  if(playerSelection == computerSelection) {
    return (`You both chose ${playerSelection}! It\'s a draw!`)};
  if (playerSelection == 'Rock') {
    if (computerSelection == 'Scissors') {
      return ("Nice one! Rock beats Scissors");
    } else if (computerSelection == 'Paper') {
      return ("You lose! Paper beats Rock");
    } else {return ("Oops something has gone wrong");
  }
  } else if (playerSelection == 'Scissors') {
    if (computerSelection == 'Paper') {
      return ("Nice one! Scissors beats Paper");
    } else if (computerSelection == 'Rock') {
      return ("You lose! Rock beats Scissors");
    } else {return ("Oops something has gone wrong");
  }
  } else if (playerSelection == 'Paper') {
    if (computerSelection == 'Rock') {
      return ("Nice one! Paper beats Rock");
    } else if (computerSelection == 'Scissors') {
      return ("You lose! Scissors beats Paper");
    } else {return ("Oops something has gone wrong");
  }
  } else {return ("Hmmm something\'s not right here!")}
}

function playRound(e) {
  let playerSelection = e.target.id;
  let computerSelection = computerPlay();
  roundResultCard.textContent = ('You chose: ' + playerSelection +
   '. Computer chose: ' + computerSelection);
  let roundResult = (roundRockPaperScissors(computerSelection, playerSelection));
  roundResultCard.textContent += roundResult;
  if (roundResult.indexOf("Nice") !== -1) {
    playerScore = playerScore + 1;
  } else if (roundResult.indexOf("lose") !== -1) {
    computerScore = computerScore + 1;
  } else return; //CHECK THIS
  computerScoreCard.textContent = `Computer has ${computerScore} points`;
  playerScoreCard.textContent = `You have ${playerScore} points`;
  if (playerScore + computerScore === 5) {
    finalResult();
  }
}

let btns = document.querySelectorAll('.choice');
btns.forEach(btn => btn.addEventListener('click', playRound))


function finalResult() {
  if (playerScore > computerScore) {
      roundResultCard.textContent = ("Game over. Congratulations! You win by " + playerScore + " points to " + computerScore);
    } else if (playerScore < computerScore) {
      roundResultCard.textContent = ("Game over. Sorry! The computer beat you by " + computerScore + " points to " + playerScore);
    }
  computerScoreCard.textContent = '';
  playerScoreCard.textContent = '';
  scoreCard.appendChild(restartBtn);
}

restartBtn.addEventListener('click', restartGame);

function restartGame(e) {
  playerScore = 0;
  computerScore = 0;
  roundResultCard.textContent = '';
  scoreCard.removeChild(restartBtn);
}
