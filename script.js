let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');
let gameOver = false;
const maxScore = 5;


const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    const compChoice = arrOfChoices[randomNum];
    return compChoice;
}
const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p');
    if(playerSelection === computerSelection){
        p.innerText = `You tied! You both picked ${playerSelection}`;
        
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        p.innerText = "You won! Rock crushes scissors";
        
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        p.innerText = "You won! Paper folds rock";
        
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++;
        p.innerText = "You won! Scissors cuts paper";
        
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        p.innerText = "You lost! Paper folds rock";
        
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        p.innerText = "You lost! Scissors cuts paper";
        
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        p.innerText = "You lost! Rock crushes scissors";
        
    }
    outcomeDiv.appendChild(p);
}
const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player score: ${playerScore}`;
    computerScoreSpan.innerText = `Computer score: ${computerScore}`;
}

const checkForWinner = (playerScore, computerScore) => {
    if(playerScore === maxScore || computerScore === maxScore){
        
        gameOver = true;
        const h2 = document.createElement('h2');
       
        if(playerScore === maxScore){
        h2.classList.add('player-won');
        h2.innerText = `You won ${playerScore} to ${computerScore} great job beating the computer!`;
    }else if(computerScore === maxScore){
        h2.classList.add('computer-won');
        h2.innerText = `Computer won ${computerScore} to ${playerScore} you lost, womp womp lil fella!`;
    }
        outcomeDiv.appendChild(h2);
        const removeButton = document.createElement('button');
        removeButton.innerText = "Restart";
        removeButton.addEventListener('click', () => {
            restart();
        });
        outcomeDiv.appendChild(removeButton);
}
}

const restart = () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    while(outcomeDiv.firstChild){
        outcomeDiv.removeChild(outcomeDiv.firstChild);
    }
    updateScores(playerScore, computerScore);
}
rockButton.addEventListener('click', () =>{
    if (!gameOver){
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore,computerScore);
    updateScores(playerScore, computerScore);
    }
})

paperButton.addEventListener('click', () =>{
    if(!gameOver){
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore,computerScore);
    updateScores(playerScore, computerScore);
    }
})

scissorsButton.addEventListener('click', () =>{
    if(!gameOver){
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore,computerScore);
    updateScores(playerScore, computerScore);
}
})
//we need to make it so that the player/computer score stops counting after 5
//we need to make it so that it only prints the winner of the game once and restarts the game