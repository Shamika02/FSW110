var c = document.getElementById("myDiv");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(100, 100, 800, 800);
ctx.stroke();

function mOver(obj) {
    obj.style.backgroundColor = "blue"; 
    obj.innerHTML = "First"
    
  }
  function mOut(obj) {
    obj.style.backgroundColor = "white"; 
    obj.innerHTML = "Second"
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="yellow";
    obj.innerHTML="third";
  }
  function mDown(obj){
  obj.style.backgroundColor="red";
  obj.innerHTML="Fourth";
  }
  function mLft(obj){
    obj.style.backgroundColor="green";
    obj.innerHTML="Fifth";
  }
  function mRght(obj){
    obj.style.backgroundColor="orange";
    obj.innerHTML="sixth";
    }
    