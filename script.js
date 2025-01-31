let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let username = "";

// Random congratulatory messages
const congratulatoryMessages = [
    "Congratulations, you win! 🎉",
    "Well played! You beat the computer! 👏",
    "You're a Rock-Paper-Scissors champion! 🏆",
    "Better luck next time! 💪"
];

document.getElementById('startButton').addEventListener('click', () => {
    username = document.getElementById('usernameInput').value.trim();
    if (username === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById('username').textContent = username;
    document.getElementById('usernameSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
});

document.getElementById('rock').addEventListener('click', () => playRound('Rock'));
document.getElementById('paper').addEventListener('click', () => playRound('Paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('Scissors'));

document.getElementById('reset').addEventListener('click', resetGame);
document.getElementById('newGameButton').addEventListener('click', () => location.reload());

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
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

    document.getElementById('userChoiceImage').src = `imgs/${userChoice}.png`;
    document.getElementById('computerChoiceImage').src = `imgs/${computerChoice}.png`;

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
    document.getElementById('userChoiceText').textContent = '';
    document.getElementById('computerChoiceText').textContent = '';
    updateScore();
    document.getElementById('gameSection').style.display = 'block';
    document.getElementById('finalResultSection').style.display = 'none';
}

function endGame() {
    let winnerMessage = userScore > computerScore ? "You are the overall winner!" : (computerScore > userScore ? "Computer wins the game!" : "It's a tie overall!");

    document.getElementById('finalWinner').textContent = winnerMessage;
    document.getElementById('congratulationMessage').textContent = congratulatoryMessages[Math.floor(Math.random() * congratulatoryMessages.length)];
    
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('finalResultSection').style.display = 'block';
}
