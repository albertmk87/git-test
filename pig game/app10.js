

var scores;
var roundScore;
var activaPlayer;
var isPlaying=true;

init();


document.querySelector(".btn-roll").addEventListener("click", function(){
	if(isPlaying){
		dice=Math.floor(Math.random()*6+1);
		document.querySelector(".dice").style.display="block";
	document.querySelector(".dice").src="dice-" + dice +".png";
	if(dice!==1){
		roundScore=roundScore+dice;
	document.querySelector("#current-"+activaPlayer).textContent=roundScore;
		}else {

			nextPlayer()
	}
	

		}
})

	

document.querySelector(".btn-hold").addEventListener("click", function(){
	if(isPlaying===true){
		scores[activaPlayer]=scores[activaPlayer]+roundScore;
		document.querySelector("#score-"+activaPlayer).textContent=scores[activaPlayer];	
		document.querySelector("#current-"+activaPlayer).textContent="0";
			if(scores[activaPlayer]>=20){
				document.querySelector(".player-0-panel").classList.remove("active");
				document.querySelector(".player-1-panel").classList.remove("active");
				document.querySelector(".player-"+ activaPlayer+"-panel").classList.add("winner");
				document.querySelector("#name-"+activaPlayer).textContent="winner";
				isPlaying=false;

			}else {
				nextPlayer();
			}
	}
		
		});	

			document.querySelector(".btn-new").addEventListener("click", function(){
					init();

			});



function init() {

document.querySelector("#score-0").textContent="0";
document.querySelector("#score-1").textContent="0";
document.querySelector("#current-0").textContent="0";
document.querySelector("#current-1").textContent="0";
document.querySelector("#name-0").textContent="Player-1";
document.querySelector("#name-1").textContent="Player-2";

	document.querySelector(".dice").style.display="none";
	document.querySelector(".player-0-panel").classList.remove("winner");	
			document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.remove("active");	
			document.querySelector(".player-1-panel").classList.remove("active");
			document.querySelector(".player-0-panel").classList.add("active");
scores=[0,0];
roundScore=0;

activaPlayer=0;
}

function nextPlayer(){
if(activaPlayer===0){
				activaPlayer=1;
			}else if (activaPlayer===1){
				activaPlayer=0;
			}
			roundScore=0;
			document.querySelector("#current-0").textContent="0";
			document.querySelector("#current-1").textContent="0";
			document.querySelector(".player-0-panel").classList.toggle("active");	
			document.querySelector(".player-1-panel").classList.toggle("active");
			document.querySelector(".dice").style.display="none";

}