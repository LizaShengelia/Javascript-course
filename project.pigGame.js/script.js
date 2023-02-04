const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0'); //
const currentScore2 = document.querySelector('#current--1'); //
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const name = document.querySelector('#name--0');
score1.textContent = 0;
score2.textContent = 0;
let player1Score = 0;
let player2Score = 0;
//roling dice
let score = 0;
let activePlayer = 0;
let currentScore = 0;
let playing = true;

const switchPlayer = function () {
  if (player1Score >= 20 || player2Score >= 20) {
    playing = false;
    dice.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (!playing) return;
  let number = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${number}.png`;
  if (number !== 1) {
    currentScore += number;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    // document.querySelector(`#score--${activePlayer}`).textContent =
    //   currentScore;
  } else {
    switchPlayer();
  }
  //document.querySelector;
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (activePlayer == 0) {
      player1Score += currentScore;
      document.querySelector(`#score--${activePlayer}`).textContent =
        player1Score;
      switchPlayer();
    } else {
      player2Score += currentScore;
      document.querySelector(`#score--${activePlayer}`).textContent =
        player2Score;
      switchPlayer();
    }
  }
});
