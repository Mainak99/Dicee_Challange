var player1 = Math.floor((Math.random()*6)+1);
var player2 = Math.floor((Math.random()*6)+1);
var winner;
player1dice();
player2dice();

// var playerImg1 = "dice"+player1+".png";
// var playerImg2 = "dice"+player2+".png";

if (player1>player2)
winner = "Player 1 wins";
else if (player2>player1)
winner = "Player 2 wins";
else // player1 === player2
winner = "Draw";

document.querySelector("h2").innerHTML=winner;


console.log(player1);
console.log(player2);
console.log(winner);


function player1dice(){
    if (player1 === 1)
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
    else if (player1 === 2)
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
    else if (player1 === 3)
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
    else if (player1 === 4)
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
    else if (player1 === 5)
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
    else // (player1 === 6)
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
       
}
function player2dice(){
    if (player2 === 1)
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
    else if (player2 === 2)
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
    else if (player2 === 3)
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
    else if (player2 === 4)
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
    else if (player2 === 5)
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
    else // (player2 === 6)
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}