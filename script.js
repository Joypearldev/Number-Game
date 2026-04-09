'use strict';
let sercetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

 //when there is no input
  if (!guess) {
    displayMessage('No number!');

    //when player wins
    
  } else if (guess === sercetNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = sercetNumber;
   
      document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

//when guess is wrong
  }else if (guess !== sercetNumber)
     {
    if (score > 1) {
     
      displayMessage(guess > sercetNumber ? 'Too High!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     
      displayMessage('you lost the game!');
      document.querySelector('.score').textContent = 0;
    }}
  
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  sercetNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
