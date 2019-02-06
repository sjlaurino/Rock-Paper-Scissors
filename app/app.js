
let options = {
  rock: {
    img: ('https://i.pinimg.com/originals/cd/63/d9/cd63d97dd4a883f9bba914248a0ff23e.jpg')
  },
  paper: {
    img: ('https://kopiernet.files.wordpress.com/2016/07/paper.jpg')
  },
  scissors: {
    img: ('https://pmcvariety.files.wordpress.com/2015/12/edward-scissorhands.jpg?w=1000&h=563&crop=1')
  }
}


function random() {
  let choices = Object.keys(options)
  let choiceIndex = Math.floor(Math.random() * choices.length)
  let choice = choices[choiceIndex]
  return choice
}

function play(playerChoice) {
  let cpChoice = random()
  console.log(cpChoice)
  if (playerChoice == 'rock') {
    if (cpChoice == 'rock') {
      document.getElementById('result').innerHTML = 'DRAW, try again!'
    } else if (cpChoice == 'paper') {
      document.getElementById('result').innerHTML = 'YOU\'VE BEEN SMOTHERED! Try again!'
    } else if (cpChoice == 'scissors') {
      document.getElementById('result').innerHTML = 'YOU WIN!'
    }
  }

  if (playerChoice == 'paper') {
    if (cpChoice == 'paper') {
      document.getElementById('result').innerHTML = 'DRAW, try again!'
    } else if (cpChoice == 'scissors') {
      document.getElementById('result').innerHTML = 'YOU\'VE BEEN CUT!, Try again!'
    } else if (cpChoice == 'rock') {
      document.getElementById('result').innerHTML = 'YOU WIN!'
    }
  }

  if (playerChoice == 'scissors') {
    if (cpChoice == 'scissors') {
      document.getElementById('result').innerHTML = 'DRAW, try again!'
    } else if (cpChoice == 'paper') {
      document.getElementById('result').innerHTML = 'YOU WIN!'
    } else if (cpChoice == 'rock') {
      document.getElementById('result').innerHTML = 'YOU\'VE BEEN CRUSHED, try again'
    }
  }
}




