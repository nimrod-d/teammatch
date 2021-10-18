'use strict';

const playerNameInput = document.querySelector('.player-name');
const playerRateInput = document.querySelector('.player-rate');

let usersList = [];

class User {
  constructor(playerName, playerRate, userID) {
    this.playerName = playerName;
    this.playerRate = playerRate;
    this.userID = userID;
  }
}

document.querySelector('.sign-player').addEventListener('click', function () {
  let playerName = playerNameInput.value;

  let playerRate = Number(playerRateInput.value);

  let userID = new Date().getTime();

  const user = new User(playerName, playerRate, userID);

  document.querySelector('.box').insertAdjacentHTML(
    'beforeend',
    `<div class="user-box">
        <li class="user">Player: ${playerName} ${playerRate}</li>
         </div>`
  );

  playerNameInput.value = '';
  playerRateInput.value = '';

  usersList.push(user);
  console.log(user);
  console.log(usersList);
  // console.log(playerName);
  // console.log(playerRate);
});
