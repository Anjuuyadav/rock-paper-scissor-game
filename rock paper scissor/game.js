let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscoreboard = document.querySelector("#user-score");
const compscoreboard = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
     const radIdx = Math.floor(Math.random()*3);
     return options[radIdx];
}

const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game wa draw. Play again";
    msg.style.backgroundColor ="blue" ;
 }

  const showWinner = (userwin, userChoice, compChoice) =>{
  if(userwin){
   
   userScore++;
   userscoreboard.innerText = userScore;
    msg.innerText = `you win! your choice ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
  compScore++;
  compscoreboard.innerText = compScore;
    msg.innerText = `you lose! computer choice  ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  }



const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    const compChoice= genCompChoice();
    console.log("compChoice = ", compChoice);
    if(userChoice===compChoice){
         drawGame();
    }else{
        let userwin = true;
        
        if(userChoice === "rock"){
            userwin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userwin = compChoice === "scissor"? false: true;
        }else {
            userWin = compChoice === "rock" ? false: true;
        }

        showWinner(userwin, userChoice,compChoice);
    }
}


  
choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
      const userChoice =  choice.getAttribute("id");
      
     playGame(userChoice);
      
    })
    
})
