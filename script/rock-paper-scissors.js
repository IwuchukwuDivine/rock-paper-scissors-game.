let score = JSON.parse(localStorage.getItem('score'));

function updateScore () {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Tie: ${score.Tie}`;
}
updateScore();

function pickComputerMove() {
  let computerMove = '';
  randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
}

function playGame(playerMove) {
  let result = '';
  const computerMove = pickComputerMove();
  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.'
    } else if (computerMove === 'Paper') {
      result = 'You Lose!'
    } else if (computerMove === 'Scissors') {
      result = 'You Win!!'
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win!!.'
    } else if (computerMove === 'Paper') {
      result = 'Tie.'
    } else if (computerMove === 'Scissors') {
      result = 'You Lose!'
    }
  } else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You Lose!'
    } else if (computerMove === 'Paper') {
      result = 'You Win!!'
    } else if (computerMove === 'Scissors') {
      result = 'Tie.'
    }
  }
  if (result === 'Tie.') {
    score.Tie += 1;
  } else if (result === 'You Win!!') {
    score.Wins += 1;
  } else if (result === 'You Lose!') {
    score.Losses += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}.png" alt="" class="move-icon">  <img src="images/${computerMove}.png" alt="" class="move-icon"> Computer`;
  updateScore();

}

let isAutoPlaying = false;
let intervalId;
function autoPlay () {
  if (!isAutoPlaying) {
    document.querySelector('.js-auto-play-button').innerHTML = 'Stop Playing'
    intervalId = setInterval(function () {
      let playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play'
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
 
}