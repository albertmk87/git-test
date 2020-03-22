
let startBtn=document.querySelector("button");
const holes1=document.querySelectorAll(".hole");
let score=document.querySelector(".score");
const holes=Array.from(holes1);
let lastHole;
let countScore=0;
let timeUp=true;
let moles=document.querySelectorAll(".mole");


function startGame() {
    score.textContent = 0;
    timeUp = false;
    countScore = 0;
    showUp();
    setTimeout(() => timeUp = true, 15000) //show random moles for 15 seconds
}

const randomTime=(min, max)=> {
    return Math.round(Math.random() * (max - min) + min);
}



const showUp=() => {
	const time=randomTime(500,1000);
	const hole=randomHole(holes);

	hole.classList.add("up");
	  setTimeout(() => {
        hole.classList.remove('up'); 
        if(!timeUp) {
            showUp();
        }
    }, time);
}

const randomHole = (holes) => {
	let randomNum=Math.floor(Math.random()*holes.length);
	const hole=holes[randomNum];

	return hole;
}



startBtn.addEventListener("click", ()=>{
	startGame();
})


moles.forEach(mole=> {
	mole.addEventListener("click" , function(e){
		countScore++;
		score.textContent=countScore;

	})
})