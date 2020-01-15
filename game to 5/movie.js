
var p1button=document.getElementById("p1");
var p2button=document.querySelector("#p2");
var reset=document.querySelector("#reset");
var p1Score=0;
var p2Score=0;
var p1currentScore=document.querySelector("#currentp1");
var p2currentScore=document.querySelector("#currentp2");
var finalScore=5;
var gameOver=false;
var numInput=document.querySelector("input");

p1button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		  if(p1Score===finalScore){
		  	p1currentScore.classList.add("winner");
	    		gameOver=true;
	    }
p1currentScore.textContent=p1Score;

	}
		
	})

p2button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		  if(p2Score===finalScore){
		  	p2currentScore.classList.add("winner");

	    		gameOver=true;
	    }
p2currentScore.textContent=p2Score;
	}
		
	})


reset.addEventListener("click", function(){
	p1Score=0;
    p2Score=0;
    p1currentScore.textContent="0";
     p2currentScore.textContent="0";
     gameOver=false;
     p1currentScore.classList.remove("winner");
     p2currentScore.classList.remove("winner");
})

numInput.addEventListener("change", function(){
		document.querySelector("#final").textContent=numInput.value;
		finalScore=Number(numInput.value);

})