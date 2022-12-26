const choices = ['rock', 'paper', 'paper']

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)]
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie'
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player'
    } else {
        return 'computer'
    }
}

function displayResult(winner) {
    if (winner === 'player') {
        result.textContent = 'You won!'
    } else if (winner === 'computer') {
        result.textContent = 'Computer Won!'
    } else {
        result.textContent = "It's a tie!"
    }
}

const buttons = document.querySelectorAll('button')
const result = document.querySelector('#result')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id
        const computerChoice = getComputerChoice()
        const winner = determineWinner(playerChoice, computerChoice)
        displayResult(winner)
    })
})