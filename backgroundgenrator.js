var colorOne = document.getElementById("colorOne");
var colorTwo = document.getElementById("colorTwo");
var body = document.getElementById("gradient");

function Gragient (){
   body.style.background ="linear-gradient(to right, "+colorOne.value+","+colorTwo.value+")"
}

colorOne.addEventListener("input",Gragient);
colorTwo.addEventListener("input",Gragient);