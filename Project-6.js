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
      food1.setAttribute("x", random)
      console.log("hello")
}

})
