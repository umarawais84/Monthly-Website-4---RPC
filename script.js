        let userScore = 0;
        let computerScore = 0;

        function updateScore() {
            document.getElementById('userScore').textContent = userScore;
            document.getElementById('computerScore').textContent = computerScore;
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

        function getComputerChoice() {
            const choices = ['rock', 'paper', 'scissors'];
            return choices[Math.floor(Math.random() * 3)];
        }

        document.getElementById('rock').addEventListener('click', () => {
            playRound('rock');
        });

        document.getElementById('paper').addEventListener('click', () => {
            playRound('paper');
        });

        document.getElementById('scissors').addEventListener('click', () => {
            playRound('scissors');
        });

        function playRound(userChoice) {
            const computerChoice = getComputerChoice();
            const result = getWinner(userChoice, computerChoice);
            document.getElementById('result').textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
            updateScore();
        }