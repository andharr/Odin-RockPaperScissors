function getComputerChoice() {
    let result = Math.random()
    return result > .66 ? 'rock'
        : result > .33 ? 'paper'
        : 'scissors'
}

function playRound(playerChoice) {
    let botChoice = getComputerChoice()
    playerChoice = playerChoice.toLowerCase()
    let result = ''
    if((playerChoice === 'rock' && botChoice === 'scissors') || 
    (playerChoice === 'scissors' && botChoice === 'paper') || 
    (playerChoice === 'paper' && botChoice === 'rock')) {
        //return(`You won! ${playerChoice} beats ${botChoice}`)
        result = 'player'
        return result
    } else if (playerChoice == botChoice) {
        result = 'TIE'
        return result
    } else //return(`You lost... ${botChoice} beats ${playerChoice}`)
        result = 'computer'
        return result
}


// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 

function game() {
    let player = 0;
    let computer = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let pickOne = prompt('What do you choose?')
        let result = playRound(pickOne)
        if (result == 'player') {
            player += 1;
            console.log('player won')
        } else if (result == 'computer') {
            computer += 1;
            console.log('computer won')
        } else {
            tie += 1;
            console.log("it's a tie")
        }
        }
    if (player > computer && player > tie) {
        console.log('You won!')
    } else if (computer > player && computer > tie) {
        console.log('You lost...')
    } else {
        console.log("It's a tie")
    }
}