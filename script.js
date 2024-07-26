const playerDisplay = document.getElementById("player-choice");

const computerDisplay = document.getElementById("computer-choice");

const resultDisplay = document.getElementById("resultDisplay");

const choices = ['Rock', 'Paper', 'Scissors'];

function Game(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const getResult = (playerChoice, computerChoice) => 

    playerChoice === computerChoice ? "It's A Tie! 😐 " :

    (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper' && computerChoice === 'Rock') 
    ? 'You Win! 😄'
    : 'You Lose! 😭'

    const result = getResult(playerChoice,computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    resultDisplay.style.backgroundColor =
    result === 'It\'s A Tie! 😐 '
    ? 'blue'
    : result === 'You Win! 😄'
    ? 'green'
    : 'red';
    
    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";
}

