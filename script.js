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
    
    if (playerSelection === computerSelection){
        const p = document.createElement('p')
        p.innerText = `You Tied you both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
    } 
     else if (playerSelection === 'rock'  && computerSelection === 'scissors'){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You won! You rock'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper'  && computerSelection === 'rock'){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You won! You picked paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors'  && computerSelection === 'paper'){
        playerScore++
        const p = document.createElement('p')
        p.innerText =  'You won! You picked scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock'  && computerSelection === 'paper'){
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lost! Paper covers rock'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper'  && computerSelection === 'scissors'){
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lost! Scissors cut paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors'  && computerSelection === 'rock'){
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lost! Rock smashes scissors'
        outcomeDiv.appendChild(p)
    }
}

const checkWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer!`
        outcomeDiv.appendChild(h2)
    }
    if (compScore === 5){
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${compScore} great job computer!`
        outcomeDiv.appendChild(h2)
    }
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
