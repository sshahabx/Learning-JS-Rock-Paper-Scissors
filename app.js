
// Two variables to track user and computer score

let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


// to access divs of choices
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice =() =>{
    // rock paper scissors
    const options=["rock","paper","scissors"];
    // treat the rand no as index for the array
    // only generates number between 0 and 1 
    // multiply the number by 3 to number to gen num between 0-2
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}

const drawGame = () => {
    console.log("Draw Game");
    msg.innerText="Draw";
    msg.style.backgroundColor="silver";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win");
        msg.innerText=`YOU WIN! ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Computer Wins");
        msg.innerText=`YOU LOSE! ${compChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`;
        msg.style.backgroundColor="red";
    }
}

// comp choice
const playGame=(userChoice) => {
    console.log(" User choice is : ", userChoice)
    // Generate computer choice
    const compChoice=genCompChoice();
    console.log(`${compChoice} is Computer's choice`);
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }
        else{
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const choiceUser=choice.getAttribute("id");
        playGame(choiceUser);
     
    });
});
