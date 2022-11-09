let playerScore = 0 
let compScore = 0 

const compPlay = () => {
    const arrOfChoices = ['rock' , 'paper' , 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
} 

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return `You Tied you both picked ${playerSelection}`
    } 
     else if (playerSelection === 'rock'  && computerSelection === 'scissors'){
        playerScore++
        return 'You won! You rock'
    } else if (playerSelection === 'paper'  && computerSelection === 'rock'){
        playerScore++
        return 'You won! You picked paper'
    } else if (playerSelection === 'scissors'  && computerSelection === 'paper'){
        playerScore++
        return 'You won! You picked scissors'
    } else if (playerSelection === 'rock'  && computerSelection === 'paper'){
        compScore++
        return 'You lost! Paper covers rock'
    } else if (playerSelection === 'paper'  && computerSelection === 'scissors'){
        compScore++
        return 'You lost! Scissors cut paper'
    } else if (playerSelection === 'scissors'  && computerSelection === 'rock'){
        compScore++
        return 'You lost! Rock smashes scissors'
    }
}

const game = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('choose what to throw' , 'Rock, Paper, Scissors').toLocaleLowerCase()
        const computerSelection = compPlay()
        console.log('1' , playRound(playerSelection, computerSelection))
    }
    if(playerScore > compScore){
        return 'You Win! The computer is no match for you!'
    }
    else if(playerScore < compScore){
        return 'You Lose! The computer wins!'
    } 
    else {
        return 'You tied a machine not bad.'
    }
    
}

console.log(game());
