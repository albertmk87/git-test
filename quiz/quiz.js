var startBtn=document.querySelector("#start");
var nextBtn=document.querySelector("#next");
var endBtn=document.querySelector("#end");
var questionContainer=document.querySelector(".question");
var buttonsContainer=document.querySelector(".buttons");
var finishContainer=document.querySelector(".finish");
var finishDisplay=document.querySelector("#finish");
var buttons1=document.querySelectorAll(".btn");
var userScore=0;
var questionDisplay=document.querySelector("#question");
let k=0;

$("#start").on("click", startGame);



	$("#next").on("click", function(){
		k++;
		if(k>10){
			nextBtn.classList.add("hide");
			nextBtn.disabled=true;
			// nextBtn.classList.add("hide");
		}else{

			nextQuestion();
		}
	});

	endBtn.addEventListener("click", function(){
		startBtn.classList.add("hide");
		nextBtn.classList.add("hide");
		endBtn.classList.add("hide");
		questionContainer.classList.add("hide");
		buttonsContainer.classList.add("hide");
		finishContainer.classList.remove("hide");

		if(userScore>5){
		finishDisplay.innerHTML="You passed the test your score is <span class='winner'>"+userScore+"</span>";
		}else{
				finishDisplay.innerHTML="You failed the test your score is <span class='loser'>"+userScore+"</span>";		
			}
	})
	
	// buttonsContainer.forEach(function(button){
// 	this.addEventListener("click", function(){
// 	alert("clicked the container");

// });
// })


function startGame(){
		startBtn.classList.add("hide");
		nextBtn.classList.remove("hide");
		endBtn.classList.remove("hide");
		questionContainer.classList.remove("hide");
		buttonsContainer.classList.remove("hide");
		
		nextQuestion();
		}
		

		function nextQuestion(){
			buttonsContainer.classList.remove("disabledbutton");
			let value;
			buttonsContainer.innerHTML="";
			let random=Math.floor(Math.random()*allQuestions.length);
		questionDisplay.innerText=allQuestions[random].question;
		for(let i=0;i<allQuestions[random].choices.length;i++){
		let button=document.createElement("button");
		button.innerText=allQuestions[random].choices[i];
		button.value=i;
		button.addEventListener("click", function(){
		value1=button.value;
		if(parseInt(value1)===allQuestions[random].correctAnswer){
			button.style.backgroundColor="green";
			userScore++;
		}else{
				button.style.backgroundColor="red";
		}
			buttonsContainer.classList.add("disabledbutton");
		})
		button.classList.add("btn");
		buttonsContainer.appendChild(button);

		}
}

		var allQuestions = [
		{question: "What is the longest that an elephant has lived?", choices: ["17 years", "18 years", "19 years", "86 years"], correctAnswer:3},
		{question: "КHow many rings are on the Olympic flag?", choices: ["4", "5", "2"], correctAnswer:1},
		{question: "В How did Spider-Man get his powers?", choices: ["Military experiment gone awry", "Born with them", "Woke up with them after a strange dream", "Bitten by a radioactive spider "], correctAnswer:3},
		{question: "In darts, what's the most points you can score with a single throw?", choices: ["20", "40","60"], correctAnswer:2},
		{question: "Which of these animals does NOT appear in the Chinese zodiac?", choices: ["Bear	", "Rabbit","Dragon"], correctAnswer:0},
		{question: "How many holes are on a standard bowling ball?", choices: ["2", "3","5","10"], correctAnswer:1},
		{question: "What are the main colors on the flag of Spain?", choices: ["Black and yellow", "Green and white", "Blue and white", "Red and yellow "], correctAnswer:3},
		{question: "Are giant pandas a type of bear?", choices: ["YES", "NO"], correctAnswer:0},
		{question: "How many points is the letter X worth in English-language Scrabble?", choices: ["None", "8", "10"], correctAnswer:1},
		{question: "Who was Forest Gump", choices: ["Tom Hanks", "Brad Pitt", "Johnny Deep", "Marlon Brando"], correctAnswer:0},
		{question: "Who was the lead actor in Titanic", choices: ["Tom Hanks", "Brad Pitt", "Johnny Deep", "Leonardo DiCaprio"], correctAnswer:3},
		{question: "Who was the director in Terminator", choices: ["James Cameron", "Taika Waittiti", "George Lucas", "Steven Spielberg"], correctAnswer:0},
		{question: "Who was the lead actor in Terminator", choices: ["Stalone", "Arnold S.", "Liam Neason", "Tom Cruise"], correctAnswer:1},
		{question: "Who was the lead actor in Rambo", choices: ["Stalone", "Arnold S.", "Liam Neason", "Tom Cruise"], correctAnswer:0},
		{question: "Who was the lead actor in Mission Impossible", choices:["Stalone", "Arnold S.", "Liam Neason", "Tom Cruise"], correctAnswer:3},
		{question: "Munich is in", choices: ["Germany", "Italy"], correctAnswer:0},
		{question: "Milano is in", choices: ["Germany", "Italy","Spain","France", "Netherlands"], correctAnswer:1},
		{question: "Skopje is in", choices: ["Germany", "Italy","Spain","France", "Macedonia"], correctAnswer:4},
		{question: "Tirana is in", choices: ["Germany", "Italy","Albania","France", "Macedonia"], correctAnswer:2},
		{question: "Belgrade is in", choices: ["Serbia", "Italy","Albania","France", "Macedonia"], correctAnswer:0}

		];