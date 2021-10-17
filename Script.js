'use strict';

let usersList = [];

class User {
  constructor(playerName, playerRate) {
    this.playerName = playerName;
    this.playerRate = playerRate;
  }
}

document.querySelector('.sign-player').addEventListener('click', function () {
  let playerName = document.querySelector('.player-name').value;

  let playerRate = Number(document.querySelector('.player-rate').value);

  const user = new User(playerName, playerRate);

  document
    .querySelector('.box')
    .insertAdjacentHTML(
      'beforeend',
      `<li class="user">Player: ${playerName} ${playerRate}</li>`
    );

  usersList.push(user);
  console.log(user);
  console.log(usersList);
  // console.log(playerName);
  // console.log(playerRate);
});
