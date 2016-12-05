function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

var width = 40
var height = 40
var playerX
var playerY
var foodX
var foodY
var x = 250
var y = 100
var foodScore = 0
var timeStart = Date.now()

document.addEventListener("keydown", function(e) {


  if(e.keyCode == 37){
    x -=15;
    document.getElementById("bat").setAttribute("x", x)

  }

  else if(e.keyCode == 39){
    x +=15;
    document.getElementById("bat").setAttribute("x", x)
  }

  else if(e.keyCode == 40){
    y +=15;
    document.getElementById("bat").setAttribute("y", y)
  }

  else if(e.keyCode == 38){
    y -=15;
    document.getElementById("bat").setAttribute("y", y)

  }

  var player1 = document.getElementById("bat")
  var food1 = document.getElementById("food1")

  playerX = Number(player1.getAttribute("x")) + 25
  playerY = Number(player1.getAttribute("y")) + 25

  foodX = Number(food1.getAttribute("x"))
  foodY = Number(food1.getAttribute("y"))

  var random = randomNumber(10,450);

  if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
      food1.setAttribute("y", random)
      foodScore = foodScore + 1
      document.getElementById("Score").innerHTML = foodScore
}


    foodX2 = Number(food2.getAttribute("x"))
    foodY2 = Number(food2.getAttribute("y"))

  if (playerX > foodX2 && playerX < foodX2 + width && playerY > foodY2 && playerY < foodY2 + height) {
      food2.setAttribute("y", random)
      foodScore = foodScore + 1
      document.getElementById("Score").innerHTML = foodScore
  }

  if (foodScore == 2)  {
    document.getElementById("Gameover").setAttribute("opacity", 1)
    food2.setAttribute("y", 1000)
    food1.setAttribute("y", 1000)
  }
})
