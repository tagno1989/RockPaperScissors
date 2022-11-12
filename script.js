let playerScore = 0 
let compScore = 0 
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

const compPlay = () => {
    const arrOfChoices = ['rock' , 'paper' , 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
} 

const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p')
    if (playerSelection === computerSelection){
        p.innerText = `You Tied you both picked ${playerSelection}`
    } else if (playerSelection === 'rock'  && computerSelection === 'scissors'){
        playerScore++
        p.innerText = 'You won! You rock'
    } else if (playerSelection === 'paper'  && computerSelection === 'rock'){
        playerScore++
        p.innerText = 'You won! You picked paper'
    } else if (playerSelection === 'scissors'  && computerSelection === 'paper'){
        playerScore++
        p.innerText =  'You won! You picked scissors'
    } else if (playerSelection === 'rock'  && computerSelection === 'paper'){
        compScore++
        p.innerText = 'You lost! Paper covers rock'
    } else if (playerSelection === 'paper'  && computerSelection === 'scissors'){
        compScore++
        p.innerText = 'You lost! Scissors cut paper'
    } else if (playerSelection === 'scissors'  && computerSelection === 'rock'){
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lost! Rock smashes scissors'
    }
    outcomeDiv.appendChild(p)

}

const checkWinner = (playerScore, compScore) => {
    const h2 = document.createElement('h2')
    if (playerScore === 5) {
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer!`
    }
    if (compScore === 5){
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${compScore} great job computer!`
    }
    outcomeDiv.appendChild(h2)
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click' , () => {
    const computerSelection = compPlay()
    const playerSelection = 'rock'
    playRound(playerSelection , computerSelection)
    updateScores(playerScore, compScore)
    checkWinner(playerScore, compScore)
})

paperButton.addEventListener('click' , () => {
    const computerSelection = compPlay()
    const playerSelection = 'paper'
    playRound(playerSelection , computerSelection)
    updateScores(playerScore, compScore)
    checkWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click' , () => {
    const computerSelection = compPlay()
    const playerSelection = 'scissors'
    playRound(playerSelection , computerSelection)
    updateScores(playerScore, compScore)
    checkWinner(playerScore, compScore)
})

// const game = () => {
//     for(let i = 0; i < 5; i++){
//         const playerSelection = prompt('choose what to throw' , 'Rock, Paper, Scissors').toLocaleLowerCase()
//         const computerSelection = compPlay()
//         console.log('1' , playRound(playerSelection, computerSelection))
//     }
//     if(playerScore > compScore){
//         return 'You Win! The computer is no match for you!'
//     }
//     else if(playerScore < compScore){
//         return 'You Lose! The computer wins!'
//     } 
//     else {
//         return 'You tied a machine not bad.'
//     }
    
// }

// console.log(game());
