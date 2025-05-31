const rps = (p1, p2) => {
  // if statement to determine draws when identifcal selections made by both p1 & p2
  if ( p1 === p2 ) return "Draw!" ;
  // if else statement statement check if p1 wins else p2 wins
  if (
    ( p1 === "rock" && p2 === "scissors" ) ||
    ( p1 === "scissors" && p2 === "paper" ) ||
    ( p1 === "paper" && p2 === "rock" )
    ) { return "Player 1 won!" ;
       } else {
         return "Player 2 won!";
       }
};