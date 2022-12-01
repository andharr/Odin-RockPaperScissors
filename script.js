function getComputerChoice() {
    let result = Math.random()
    return result > .66 ? 'rock'
        : result > .33 ? 'paper'
        : 'scissors'
}

let result = ''
let playerScore = 0;
let computerScore = 0;

function playRound(event) {
    let computerChoice = getComputerChoice()

    if((event.target.className === 'rock' && computerChoice === 'scissors') || 
        (event.target.className === 'scissors' && computerChoice === 'paper') || 
        (event.target.className === 'paper' && computerChoice === 'rock')) {
            console.log(`You won! ${event.target.className} beats ${computerChoice}`)
            //console.log(event.target.className)
            //console.log(computerChoice)
            playerScore ++;
            console.log(`Player score = ${playerScore}`)
            
            roundWinner.textContent = `You won! ${event.target.className} beats ${computerChoice}`
            player.textContent = `Player Score: ${playerScore}`
            result = `You won! ${event.target.className} beats ${computerChoice}`
            return result
    } else if (event.target.className == computerChoice) {
            console.log('TIE')
            //console.log(event.target.className)
            //console.log(computerChoice)
            roundWinner.textContent = 'TIE'
            result = 'TIE'
            return result
    } else 
            console.log(`You lost... ${computerChoice} beats ${event.target.className}`)
            //console.log(event.target.className)
            //console.log(computerChoice)
            computerScore ++;
            console.log(`Computer score = ${computerScore}`)
            
            roundWinner.textContent = `You lost... ${computerChoice} beats ${event.target.className}`
            computer.textContent = `Computer Score: ${computerScore}`
            result = `You lost... ${computerChoice} beats ${event.target.className}`
            return result
}




let playTime = document.querySelectorAll('.buttons')
let player = document.querySelector('.player')
let computer = document.querySelector('.computer')
let roundWinner = document.querySelector('.roundWinner')

playTime.forEach(item => item.addEventListener('click', playRound))


// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 

// function game() {
//     let player = 0;
//     let computer = 0;
//     let tie = 0;



//     if (player > computer && player > tie) {
//         console.log('You won!')
//     } else if (computer > player && computer > tie) {
//         console.log('You lost...')
//     } else {
//         console.log("It's a tie")
//     }
// }


//DOM elements

// document.querySelector('.rock').addEventListener('click', playRound)
// document.querySelector('.paper').addEventListener('click', playRound)
// document.querySelector('.scissors').addEventListener('click', playRound)

// let playRock = document.querySelector('.rock');
// let playPaper = document.querySelector('.paper');
// let playScissors = document.querySelector('.scissors');

//let playerOptions = [playRock, playPaper, playScissors]

// let playTime = document.querySelectorAll('.buttons')

// playTime.forEach(item => item.addEventListener('click', playRound)









//////Dumpster Code/////

// function playRound(playerChoice) {
//     let botChoice = getComputerChoice()
//     let result = ''

//     if (click.target.classList.contains('rose'))

//     if((playerChoice === 'rock' && botChoice === 'scissors') || 
//     (playerChoice === 'scissors' && botChoice === 'paper') || 
//     (playerChoice === 'paper' && botChoice === 'rock')) {
//         console.log(`You won! ${playerChoice} beats ${botChoice}`)
//         console.log(playerChoice)
//         console.log(botChoice)
//         // result = 'player'
//         // return result
//     } else if (playerChoice == botChoice) {
//         console.log('TIE')
//         console.log(playerChoice)
//         console.log(botChoice)
//         // result = 'TIE'
//         // return result
//     } else 
//         console.log(`You lost... ${botChoice} beats ${playerChoice}`)
//         console.log(playerChoice)
//         console.log(botChoice)
//         // result = 'computer'
//         // return result
// }

// function game() {
//     let player = 0;
//     let computer = 0;
//     let tie = 0;
//     for (let i = 0; i < 5; i++) {
//         let pickOne = prompt('What do you choose?')
//         let result = playRound(pickOne)
//         if (result == 'player') {
//             player += 1;
//             console.log('player won')
//         } else if (result == 'computer') {
//             computer += 1;
//             console.log('computer won')
//         } else {
//             tie += 1;
//             console.log("it's a tie")
//         }
//         }
//     if (player > computer && player > tie) {
//         console.log('You won!')
//     } else if (computer > player && computer > tie) {
//         console.log('You lost...')
//     } else {
//         console.log("It's a tie")
//     }
// })