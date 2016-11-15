var batx = 200;
var baty = 100;

document.addEventListener("keydown", function(e) {

  if(e.keyCode == 37){
    batx -=15;
    document.getElementById("bat").setAttribute("x", batx)

  }

  else if(e.keyCode == 39){
    batx +=15;
    document.getElementById("bat").setAttribute("x", batx)
  }

  else if(e.keyCode == 40){
    baty +=15;
    document.getElementById("bat").setAttribute("y", baty)
  }

  else if(e.keyCode == 38){
    baty -=15;
    document.getElementById("bat").setAttribute("y", baty)
  }
})
