
let cpChoice = {
  rock: {
    img('')
  },

  paper: {
    img('')
  },
  scissors: {
    img('')
  }
}





function play(playerChoice) {
  if (playerChoice == 'rock') {
    document.getElementById('result').innerHTML = 'Draw, try again!'
  } else if (playerChoice == 'paper') {
    document.getElementById('result').innerHTML = 'YOU WIN!'
  } else if (playerChoice == 'scissors') {
    document.getElementById('result').innerHTML = 'You\'ve been crushed! Try again!'
  } else {
    document.getElementById('result').innerHTML = 'Invalid Answer, Try again!'
  }
}

function random(cpChoice) {
  let choices = Object.keys(cpChoice)
  let choiceIndex = Math.floor(Math.random() * choices.length)
  let choice = cpChoice[choiceIndex]
  play(choice)
}

