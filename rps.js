function computerPlay() {
  let computersHand = Math.floor(Math.random()*3);
  if (computersHand == 0) {
    return "Rock";
  } else if (computersHand == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function humanPlay() {
  humanHand = prompt("Please input either 'r' for rock, 'p' for paper, or 's' for scissors.");
  if (humanHand == 'r') {
    return 'Rock';
  } else if (humanHand == 'p') {
    return 'Paper';
  } else if (humanHand == 's') {
    return 'Scissors';
  } else {
    humanPlay();
  }
}

function compareHands(humanSelection, computerSelection) {
  computersHand = computerPlay();
  humanHand = humanPlay();
  if (computersHand == 'Rock') {
    if (humanHand == 'Rock') {
      return 'Tie';
    } else if (humanHand == 'Paper') {
      return 'You win!';
    } else {
      return 'You lose... that\'s kinda cringe';
    }
  } else if (computersHand == 'Paper') {
    if (humanHand == 'Rock') {
      return 'You lose... that\'s kinda cringe';
    } else if (humanHand == 'Paper') {
      return 'Tie';
    } else {
      return 'You win!';
    }
  } else {
    if (humanHand == 'Rock') {
      return 'You win!';
    } else if (humanHand == 'Paper') {
      return 'You lose... that\'s kinda cringe';
    } else {
      return 'Tie';
    }
  }
}

result = compareHands();
console.log(result);