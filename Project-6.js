var playerX = 200;
var playerY = 100;

document.addEventListener("keydown", function(e) {


  if(e.keyCode == 37){
    playerX -=15;
    document.getElementById("bat").setAttribute("x", playerX)

  }

  else if(e.keyCode == 39){
    playerX +=15;
    document.getElementById("bat").setAttribute("x", playerX)
  }

  else if(e.keyCode == 40){
    playerY +=15;
    document.getElementById("bat").setAttribute("y", playerY)
  }

  else if(e.keyCode == 38){
    playerY -=15;
    document.getElementById("bat").setAttribute("y", playerY)

  }

    foodY = Number(document.getElementById("food1").getAtrribute("y"))
    foodX = Number(document.getElementById("food1").getAtrribute("x"))

    if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + hieght) {
        console.log("hello")
    }

})
