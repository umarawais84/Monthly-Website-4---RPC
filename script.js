let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let username = "";

// Randomly select a congratulatory message
const congratulatoryMessages = [
    "Congratulations, you win! 🎉",
    "Well played! You beat the computer! 👏",
    "You're a Rock-Paper-Scissors champion! 🏆",
    "Better luck next time! 💪"
];

document.getElementById('startButton').addEventListener('click', () => {
    username = document.getElementById('usernameInput').value;
    if (username.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById('username').textContent = username;
    document.getElementById('usernameSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
});

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

document.getElementById('reset').addEventListener('click', resetGame);
document.getElementById('newGameButton').addEventListener('click', () => location.reload());

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

function updateScore() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getWinner(userChoice, computerChoice);
    
    document.getElementById('result').textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    
    roundsPlayed++;
    document.getElementById('roundsPlayed').textContent = roundsPlayed;

    updateScore();
    
    if (roundsPlayed >= 5) {
        endGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    document.getElementById('roundsPlayed').textContent = roundsPlayed;
    document.getElementById('result').textContent = '';
    updateScore();
    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('finalResultSection').style.display = 'none';
}

function endGame() {
    let winnerMessage = '';
    if (userScore > computerScore) {
        winnerMessage = "You are the overall winner!";
    } else if (computerScore > userScore) {
        winnerMessage = "Computer wins the game!";
    } else {
        winnerMessage = "It's a tie overall!";
    }

    document.getElementById('finalWinner').textContent = winnerMessage;
    document.getElementById('congratulationMessage').textContent = congratulatoryMessages[Math.floor(Math.random() * congratulatoryMessages.length)];
    
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('finalResultSection').style.display = 'block';
}
