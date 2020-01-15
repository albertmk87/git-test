

let container=document.querySelector(".container");
let btn=document.querySelector("#btn");



	let gridWidth=4;
    let gridHeight=4;
    let gridSize=gridHeight*gridWidth;
	for(let i=0;i<gridSize;i++){
	var newDiv = document.createElement("div"); 
	newDiv.classList.add("square");
	container.appendChild(newDiv);

}



hover();

function hover(){
	const divs=document.querySelectorAll(".square");
	divs.forEach(function(div){
		div.addEventListener("mouseenter",function(){
			div.style.background="black";
		})

	})
}

function resize(){
	
	let answer=prompt("what size do you want the greed to be?");

	gridSize=answer*answer;
	for(let i=0;i<gridSize;i++){
	var newDiv = document.createElement("div"); 
	newDiv.classList.add("square");
	container.appendChild(newDiv);

}
	const divs=document.querySelectorAll(".square");
	divs.forEach(function(div){
		div.style.flexBasis=100/answer + '%';
		div.style.height=100/answer + '%';
	})
}

$("button").on("click", function(){
 while (container.firstChild) container.removeChild(container.firstChild);
	    resize();
	    hover();
});


