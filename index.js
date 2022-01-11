x = Math.floor(Math.random() * 6);
y = Math.floor(Math.random() * 6);
var dice = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
// get a random element of the dice array  
//dice1.png or anything else fetched from the dice array 
var randomDice1 = dice[x];
var randomDice2 = dice[y];
// define an attriute for <img> 
var attributer1 = "images/" + randomDice1;

var attributer2 = "images/" + randomDice2;

document.querySelector(".img1").setAttribute("src", attributer1);
// set the attribute of imبللage of player two 
document.querySelector(".img2").setAttribute("src", attributer2);

// who is the winner 
var w ; //the player 
if (attributer1 > attributer2) {
    w = "Player 1";
} else if (attributer2 > attributer1) {
    w = 'Player 2';
} else {

    document.querySelector('.winner').innerHTML = "DRAW";
}
document.getElementById('winner').innerHTML = w;
