/// Random Number generated from 1 - 6 for First Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

/// Use the DOM to select the IMG element and set the attribute to a random dice number.
var randomDice1 = document.querySelector("img").setAttribute("src", "images/diceNo" + randomNumber1 + ".png")




/// Random Number generated from 1 - 6 for Second Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

/// Using the DOM to select the second img and setting a new attribute.
var randomDice2 = document.querySelectorAll("img")[1].setAttribute("src", "images/diceNo" + randomNumber2 + ".png")



/// If statement on which number is higher or lower or a draw.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins"
} else {
  document.querySelector("h1").innerHTML = "Draw"
}
