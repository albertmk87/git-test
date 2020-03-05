

let inputNumber=document.querySelector("#guessNumber");
let submitBtn=document.querySelector("#btn");
let highLow=document.querySelector("#highLow");
let turnsLeft=10;
let previousGuesses=0;
let remaining=document.querySelector("#remaining");
let previous=document.querySelector("#previous");
const randomNumber = () =>{


let randomNum= Math.floor(Math.random()*101);
return randomNum;
}

let random= randomNumber();



submitBtn.addEventListener("click", () => {
		checkNumber();
		inputNumber.value="";
})

document.addEventListener("keypress" , (event)=> {
	if(event.keyCode===13) {
		checkNumber();
		inputNumber.value="";
	}
})


const getInputValue= () => {
	return inputNumber.value;
}


const checkNumber = () => {
	let isPlaying=true;
	let inputValue=getInputValue();
	
	highLow.innerHTML="";
	if(isPlaying===true){
	if(turnsLeft===1) {
		highLow.textContent=` You lose`;
		isPlaying=false;
	}else {
	if(inputValue<random){
		highLow.textContent=` low guess again`;
		turnsLeft--;
		previousGuesses++;
		remaining.textContent=turnsLeft;
		previous.textContent=previousGuesses;
	}else if(inputValue>random){
		highLow.textContent=` high guess again`;
		turnsLeft--;
		previousGuesses++;
		previous.textContent=previousGuesses;
		remaining.textContent=turnsLeft;
	}else if(inputValue=random){
		highLow.textContent=` correct you win`;
	}
}
}
}