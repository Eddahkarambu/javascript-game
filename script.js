
// GAME ONE
const selectWinner = (player) => {
    const choices = ["rock", "paper", "scissors"];
    var item = choices[Math.floor(Math.random()*choices.length)];

}
const computerPlay =() => {
    const choices = ["rock", "paper", "scissors"];
  var computer = choices[Math.floor(Math.random() * choices.length)];
  return computer 
}

const playRound = (player, computer) => {
  if (player=== "rock" && computer === "scissors") {
     return "player wins"
  }

  if (player === "rock" && computer === "paper") {
     return "computer wins"
  }

  if (player === "rock" && computer === "rock") {
   return "its a tie"
  }
// two
    if (player=== "paper" && computer === "scissors") {
     return "computer wins"
  }

  if (player === "paper" && computer === "paper") {
     return "its a tie"
  }

  if (player === "paper" && computer === "rock") {
   return "computer wins"
  }
  // three
      if (player=== "scissors" && computer === "scissors") {
    return "its a tie"
  }

  if (player === "scissors" && computer === "paper") {
     return "player wins"
  }

  if (player === "scissors" && computer === "rock") {
    return "computer wins"
  }
}
let playerSelection = "rock";
playerSelection=(playerSelection.toLowerCase());
const computerSelection = computerPlay();
console.log(`computer has chosen ${computerSelection}`)
console.log(`player has chosen ${playerSelection}`)
console.log(playRound(playerSelection, computerSelection));


let computer = 0;
let player = 0;

for (let i = 0; i < 5; i++){
  let choice = ["rock","paper","scissors"]
  let answer = prompt("kindly enter between rock, paper and scissors")
  if (!choice.includes(answer)) {
    console.log("please enter correct choice")
  }
  const computerSelection = computerPlay();
  console.log(computerSelection)
  let winner = playRound(computerSelection, answer)
  if (winner =="computer wins"){
    computer= computer + 1
  }
if (winner =="player wins"){
  player = player + 1  
}
}
console.log(computer)
console.log(player)

if (computer > player){
  console.log("computer wins") 
}
else if (player >  computer){
    console.log("player wins") 
}else{
    console.log("its a tie") 
}