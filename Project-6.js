var width = 60
var height = 60
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
  foodY = Number(food1.getAttribute("y")

    if (playerX > foodX && playerX < foodX + 100 && playerY > foodY && playerY < foodY + 100) {
        console.log("hello")
    }

})
