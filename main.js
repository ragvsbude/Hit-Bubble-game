var time = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";


for(var i=1; i<=207; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTime(){
   var timer = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timerval").textContent = time;  
        }
        else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
  var clickednum = Number(dets.target.textContent);
  if(clickednum === hitrn){
    increaseScore();
    runTime();
    makeBubble();
    getNewHit();
  }
})

runTime();
makeBubble();
getNewHit();
