
let options = {
  rock: {
    img('https://i.pinimg.com/originals/cd/63/d9/cd63d97dd4a883f9bba914248a0ff23e.jpg')
  },
  paper: {
    img('https://kopiernet.files.wordpress.com/2016/07/paper.jpg')
  },
  scissors: {
    img('https://pmcvariety.files.wordpress.com/2015/12/edward-scissorhands.jpg?w=1000&h=563&crop=1')
  }
}


function random() {
  let choices = Object.keys(options)
  let choiceIndex = Math.floor(Math.random() * choices.length)
  let choice = options[choiceIndex]
  return choice
}

function play(playerChoice) {
  let cpChoice = random()
  if (playerChoice == 'rock') {
    if (cpChoice == 'rock') {
      document.getElementById('result').innerHTML = 'Draw, try again!'
    } else if (playerChoice == 'paper') {
      document.getElementById('result').innerHTML = 'YOU WIN!'
    } else if (playerChoice == 'scissors') {
      document.getElementById('result').innerHTML = 'You\'ve been crushed! Try again!'
    }
  }

  if (playerChoice == 'paper') {
    if (cpChoice == 'paper') {
      document.getElementById('result').innerHTML = 'Draw, try again!'
    } else if (playerChoice == 'paper') {
      document.getElementById('result').innerHTML = 'YOU WIN!'
    } else if (playerChoice == 'scissors') {
      document.getElementById('result').innerHTML = 'You\'ve been crushed! Try again!'
    }
  }

  if (playerChoice == 'scissors') {
    if (cpChoice == 'scissors') {
      document.getElementById('result').innerHTML = 'Draw, try again!'
    } else if (playerChoice == 'paper') {
      document.getElementById('result').innerHTML = 'YOU WIN!'
    } else if (playerChoice == 'scissors') {
      document.getElementById('result').innerHTML = 'You\'ve been crushed! Try again!'
    }
  }
}

random()


