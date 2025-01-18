
let username = "";
let userWins = 0;
let computerWins = 0;
let roundCount = 0;

function startGame() {
    username = document.getElementById("username").value;
    if (!username.trim()) {
        alert("Please enter your name.");
        return;
    }
    document.getElementById("greeting").innerText = `Hello, ${username}! Let's play.`;
    document.getElementById("username-section").classList.add("d-none");
    document.getElementById("game-section").classList.remove("d-none");
}

function playRound(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById("user-choice").innerText = userChoice;
    document.getElementById("computer-choice").innerText = computerChoice;

    let roundWinner = "";

    if (userChoice === computerChoice) {
        roundWinner = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        roundWinner = `${username} wins this round!`;
        userWins++;
    } else {
        roundWinner = "Computer wins this round!";
        computerWins++;
    }

    document.getElementById("round-winner").innerText = roundWinner;
    document.getElementById("user-wins").innerText = userWins;
    document.getElementById("computer-wins").innerText = computerWins;

    roundCount++;

    if (roundCount === 5) {
        endGame();
    }
}

function endGame() {
    const finalMessage = userWins > computerWins ? "Congratulations, you won!" : userWins < computerWins ? "Better luck next time!" : "It's a tie!";
    document.getElementById("congratulations").innerText = finalMessage;
    document.getElementById("final-message").classList.remove("d-none");
    document.getElementById("reset-button").classList.remove("d-none");
}

function resetGame() {
    username = "";
    userWins = 0;
    computerWins = 0;
    roundCount = 0;

    document.getElementById("username").value = "";
    document.getElementById("user-choice").innerText = "";
    document.getElementById("computer-choice").innerText = "";
    document.getElementById("round-winner").innerText = "";
    document.getElementById("user-wins").innerText = "0";
    document.getElementById("computer-wins").innerText = "0";

    document.getElementById("username-section").classList.remove("d-none");
    document.getElementById("game-section").classList.add("d-none");
    document.getElementById("final-message").classList.add("d-none");
    document.getElementById("reset-button").classList.add("d-none");
}