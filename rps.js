let humanScore = 0;
let robotScore = 0;
let roundCount = 0;

function robotPlay() {
  let robotsHand = Math.floor(Math.random()*3);
  if (robotsHand == 0) {
    return "Rock";
  } else if (robotsHand == 1) {
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

function compareHands() {
  robotsHand = robotPlay();
  humanHand = humanPlay();
  if (robotsHand == 'Rock') {
    if (humanHand == 'Rock') {
      return keepScore('Tie');
    } else if (humanHand == 'Paper') {
      return keepScore('You win!');
    } else {
      return keepScore('You lose... that\'s kinda cringe');
    }
  } else if (robotsHand == 'Paper') {
    if (humanHand == 'Rock') {
      return keepScore('You lose... that\'s kinda cringe');
    } else if (humanHand == 'Paper') {
      return keepScore('Tie');
    } else {
      return keepScore('You win!');
    }
  } else {
    if (humanHand == 'Rock') {
      return keepScore('You win!');
    } else if (humanHand == 'Paper') {
      return keepScore('You lose... that\'s kinda cringe');
    } else {
      return keepScore('Tie');
    }
  }
}

function keepScore(string) {
  if (string == 'You win!') {
    humanScore++;
    if (humanScore >= 5){
      return 'Supreme victory!' + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore;
    }
    return console.log(string + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore);
  } else if (string == 'You lose... that\'s kinda cringe') {
    robotScore++;
    if (robotScore >= 5){
      return 'Mortifying failure!' + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore;
    }
    return console.log(string + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore);
  } else if (string == 'Tie') {
    return console.log(string + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    compareHands();
  }
  if (humanScore > robotScore) {
    return console.log("Supreme victory!");
  } else if (humanScore < robotScore) {
    return console.log("Mortifying failure...");
  } else if (humanScore == robotScore) {
    return console.log("We are human... after all.");
  }
}

playGame();

/*

let currentlyPlaying = true;
let humanScore = 0;
let robotScore = 0;

function robotPlay() {
  let robotsHand = Math.floor(Math.random()*3);
  if (robotsHand == 0) {
    return "Rock";
  } else if (robotsHand == 1) {
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

function compareHands() {
  if (humanScore >= 5) {
    humanScore = 0;
    robotScore = 0;
    currentlyPlaying = false;
    return 'Supreme victory!'
  }
  if (robotScore >= 5) {
    humanScore = 0;
    robotScore = 0;
    currentlyPlaying = false;
    return 'Mortifying failure...'
  }
  robotsHand = robotPlay();
  humanHand = humanPlay();
  if (robotsHand == 'Rock') {
    if (humanHand == 'Rock') {
      return keepScore('Tie');
    } else if (humanHand == 'Paper') {
      return keepScore('You win!');
    } else {
      return keepScore('You lose... that\'s kinda cringe');
    }
  } else if (robotsHand == 'Paper') {
    if (humanHand == 'Rock') {
      return keepScore('You lose... that\'s kinda cringe');
    } else if (humanHand == 'Paper') {
      return keepScore('Tie');
    } else {
      return keepScore('You win!');
    }
  } else {
    if (humanHand == 'Rock') {
      return keepScore('You win!');
    } else if (humanHand == 'Paper') {
      return keepScore('You lose... that\'s kinda cringe');
    } else {
      return keepScore('Tie');
    }
  }
}

function keepScore(string) {
  if (string == 'You win!') {
    humanScore++;
    if (humanScore >= 5){
      currentlyPlaying = false;
      return 'Supreme victory!' + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore;
    }
    return string + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore;
  } else if (string == 'You lose... that\'s kinda cringe') {
    robotScore++;
    if (robotScore >= 5){
      currentlyPlaying = false;
      return 'Mortifying failure!' + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore;
    }
    return string + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore;
  } else if (string == 'Tie') {
    return string + '\nHuman score: ' + humanScore + '\nrobotScore: ' + robotScore;
  }
}

function playGame() {
  do {
    let result = compareHands();
    console.log(result);
  } while (currentlyPlaying == true)
}

playGame(); 

*/