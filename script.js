
//Helper functions:

//Select computer's choice
function getComputerChoice() {
    let result = Math.random()
    return result > .66 ? 'rock'
        : result > .33 ? 'paper'
        : 'scissors'
}

//Check if there's a winner
function checkWin(pScore, cScore) {
    if(pScore == 5) {
        playerScore = 0;
        computerScore = 0;
        gameWinner.style.visibility = 'visible'
        gameWinner.textContent = `Player Wins`
    } else if (cScore == 5) {
        playerScore = 0;
        computerScore = 0;
        gameWinner.style.visibility = 'visible'
        gameWinner.textContent = `Computer Wins`
    }
}


//Main gameplay function
let result = ''
let playerScore = 0;
let computerScore = 0;

function playRound(event) {
    let computerChoice = getComputerChoice()
    player.textContent = `Player Score: ${playerScore}`
    computer.textContent = `Computer Score: ${computerScore}`
    gameWinner.style.visibility = 'hidden'

    if((event.target.className === 'rock' && computerChoice === 'scissors') || 
        (event.target.className === 'scissors' && computerChoice === 'paper') || 
        (event.target.className === 'paper' && computerChoice === 'rock')) {
            playerScore ++;
            roundWinner.textContent = `You won! ${event.target.className} beats ${computerChoice}`
            player.textContent = `Player Score: ${playerScore}`
            
    } else if (event.target.className == computerChoice) {
            roundWinner.textContent = 'TIE'
            
    } else {
            computerScore ++;
            roundWinner.textContent = `You lost... ${computerChoice} beats ${event.target.className}`
            computer.textContent = `Computer Score: ${computerScore}`
    }
    checkWin(playerScore, computerScore)
}


//Dom Elements
let playTime = document.querySelectorAll('.buttons')

let player = document.querySelector('.player')
let computer = document.querySelector('.computer')
let roundWinner = document.querySelector('.roundWinner')
let gameWinner = document.querySelector('.gameWinner')

playTime.forEach(item => item.addEventListener('click', playRound))