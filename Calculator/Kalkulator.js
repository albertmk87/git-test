function add(a,b) {
	return a+b;
}

function subtract(a,b) {
	return a-b;
}

function multiply(a,b) {
	return a*b;
}

function divide(a,b){
	return a/b;
}

function operate(operator,a,b){
	let result=0;
	if(operator==="+"){
		result=add(a,b);
	}else if(operator==="-"){
		result=subtract(a,b);
	}else if(operator==="*"){
		result=multiply(a,b);
	}else if(operator==="/"){
		result=divide(a,b);
	}

	return result;
}


var numberButtons=document.querySelectorAll(".numbers");
let displayCurrent=document.querySelector(".current-operand");
let displayPrevious=document.querySelector(".previous-operand");
var operatorButtons=document.querySelectorAll(".operators");
var allClearButton=document.querySelector(".all-clear");
var equalButton=document.querySelector(".equals");
let currentValue=0;
let previousValue=0;
let nextValue=0;
let currentSum=0;
let finalSum=0;


numberButtons.forEach(function(numberButton){
	numberButton.addEventListener("click",function(e){
			if(e.target.value==0 && displayCurrent.textContent==""){
				alert("cannot input this char right now");
			}else{
displayCurrent.textContent+=numberButton.value;
		currentValue=parseInt(displayCurrent.innerText);
			}
		
	})
})

operatorButtons.forEach(function(operatorButton){
	operatorButton.addEventListener("click", function(e){
		lastClicked=e.target.value;
		let lastChar=displayCurrent.innerHTML[displayCurrent.innerHTML.length-1];
		let operator=this.value;
		if(displayCurrent.textContent=="" || lastChar=="+" || lastChar=="-" || lastChar=="*" || lastChar=="/"){
			alert("cannot click another operator");
		}else{
			displayCurrent.textContent= displayCurrent.textContent+this.value;
		}
				
	    previousValue=parseInt(displayPrevious.innerText);		
		currentValue=0;
				
	})
})

equalButton.addEventListener("click", function(){
			displayCurrent.textContent=eval(displayCurrent.textContent);
})





allClearButton.addEventListener("click", reset);

function reset(){
	displayCurrent.textContent="";
	displayPrevious.textContent="";
}