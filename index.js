var player1 = Math.floor((Math.random()*6)+1);
var player2 = Math.floor((Math.random()*6)+1);
var winner;

// player1dice();
// player2dice();

var playerImg1 = "images/dice"+String(player1)+".png";
var playerImg2 = "images/dice"+String(player2)+".png";

document.querySelector(".img1").setAttribute("src",playerImg1);
document.querySelector(".img2").setAttribute("src",playerImg2);

if (player1>player2)
winner = "Player 1 wins";
else if (player2>player1)
winner = "Player 2 wins";
else // player1 === player2
winner = "Draw!";

document.querySelector("h1").innerHTML=winner;

console.log(player1);
console.log(player2);
console.log(winner);
