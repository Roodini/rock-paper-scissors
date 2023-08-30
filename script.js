let playerScore = 0;
let computerScore = 0;

  const game = () => {
  for (let round = 1; playerScore < 5 && computerScore < 5; round++) {

  function getComputerChoice() {
    let choicesAvailable = ['Rock', 'Paper', 'Scissors'];
    let randomChoice = choicesAvailable[Math.floor(Math.random()*choicesAvailable.length)];
    return randomChoice;
  }
    
    function rounds(playerSelection, computerSelection){
    if (playerSelection == "Rock" && computerSelection == "Scissors"){
        playerScore++;
       return "Rock beats scissors, you win.";
    
    }else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        computerScore++;
       return "Rock beats scissors, computer wins.";
       
    }else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++;
       return "Scissors beats paper, you win.";
       
    }else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        computerScore++;
       return "Scissors beats paper, computer wins.";
       
    }else if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++;
       return "Paper beats rock, you win.";
       
    }else if (playerSelection == "Rock" && computerSelection == "Paper"){
        computerScore++;
       return "Paper beats rock, computer wins.";
        
    }if (playerSelection === computerSelection){
        return "Tie!";
        
    }
}
    let player = prompt('pick', '');
    playerConverted = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    const playerSelection = playerConverted;
    const computerSelection = getComputerChoice();
    console.log(rounds(playerSelection, computerSelection));

    console.log(`Player pick: ${playerSelection}`);
    console.log(`Computer pick: ${computerSelection}`);
    console.log(`Computer score: ${computerScore}, Player score: ${playerScore}`);
    
}
  }
    game();

/*
Make event listeners for each of the 3 buttons so that they get the correct playerSelection
add div for displaying results
Display running score, and the winner when someone gets 5 points 
*/