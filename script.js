let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const p = document.createElement('p');


const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    const compChoice = arrOfChoices[randomNum];
    return compChoice;
}
const playRound = (playerSelection, computerSelection) => {
    console.log('1', playerSelection, '2', computerSelection);
    if(playerSelection === computerSelection){
        p.innerText = `You tied! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        p.innerText = "You won! Rock crushes scissors";
        outcomeDiv.appendChild(p);
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        p.innerText = "You won! Paper folds rock";
        outcomeDiv.appendChild(p);
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        p.innerText = "You won! Scissors cuts paper";
        outcomeDiv.appendChild(p);
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        p.innerText = "You lost! Paper folds rock";
        outcomeDiv.appendChild(p);
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        p.innerText = "You lost! Scissors cuts paper";
        outcomeDiv.appendChild(p);
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        p.innerText = "You lost! Rock crushes scissors";
        outcomeDiv.appendChild(p);
    }
}

const checkForWinner = (playerScore, computerScore) => {
    if(playerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You won ${playerScore} to ${computerScore} great job beating the computer!`;
        outcomeDiv.appendChild(h2);
    }else if(computerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `Computer won ${computerScoreScore} to ${playerScore} you lost, womp womp lil fella!`;
        outcomeDiv.appendChild(h2);
    }
}

rockButton.addEventListener('click', () =>{
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore,computerScore);
})

paperButton.addEventListener('click', () =>{
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore,computerScore);
})

scissorsButton.addEventListener('click', () =>{
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore,computerScore);
})
/*
const game = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose what to throw", "Rock, Paper, or Scissors").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
    if(playerScore > computerScore){
        return 'You beat the computer! You are a genus!';
    }else if(playerScore < computerScore){
        return 'You got beat by the computer! You suck!';
    }else{
        return 'You tied with the computer! Not too shabby.'
    }
}

console.log(game());*/