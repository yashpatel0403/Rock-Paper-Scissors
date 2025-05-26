let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScoreSpam = document.querySelector("#user-score");
const compScoreSpam = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        userScoreSpam.innerText = userScore;
        msg.style.backgroundColor = "green";
    }else{
        msg.innerText = `You loss! Computer ${compChoice} beats your ${userChoice}`;
        compScore++;
        compScoreSpam.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("Your choice =", userChoice);
    const compChoice = genCompChoice();
    // console.log("Comp choice =", compChoice);
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});