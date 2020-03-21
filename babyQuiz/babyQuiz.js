let questions = [
    {
        question: 'What is the baby of a Moth known as?',
        choices: ['baby', 'infant', 'kit', 'larva'],
        correctAnswer: 3
    },
    {
        question: 'What is the adult of a kid called?',
        choices: ['calf', 'doe', 'goat', 'chick'],
        correctAnswer: 2
    },
    {
        question: 'What is the young of buffalo called?',
        choices: ['calf', 'baby', 'pup', 'cow'],
        correctAnswer: 0
    },
    {
        question: 'What is a baby alligator called?',
        choices: ['baby', 'gator', 'hatchling', 'calf'],
        correctAnswer: 1
    },
    {
        question: 'What is a baby Goose called?',
        choices: ['gooser', 'gosling', 'gup', 'pup'],
        correctAnswer: 1
    }
];

let nextQuestionBtn=document.querySelector(".nextButton");
let messageDisplay=document.querySelector(".quizMessage")
let currentQuestion=0;
let correctAnswers=0;


const displayQuestion=() => {
	let question=questions[currentQuestion].question;
	let questionContainer=document.querySelector(".question");
	let choiceContainer=document.querySelector(".choiceList");
	let numOfChoices=questions[currentQuestion].choices.length;
	questionContainer.textContent=question;

choiceContainer.innerHTML="";

	for(let i=0;i<numOfChoices;i++) {
		choice=questions[currentQuestion].choices[i];
		var li=document.createElement("li");
		li.innerHTML= '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>';
		choiceContainer.appendChild(li);
	}
}

displayQuestion();

nextQuestionBtn.addEventListener("click", ()=> {
	let radioBtnsChecked = document.querySelector('input[type=radio]:checked');
	if(radioBtnsChecked===null){
			messageDisplay.textContent="Please select an answer";
		}else {
			console.log(`${radioBtnsChecked.value} vs ${questions[currentQuestion].correctAnswer}`);
			if(parseInt(radioBtnsChecked.value)===questions[currentQuestion].correctAnswer){
				correctAnswers=correctAnswers+1;
				console.log(correctAnswers);
			}
			currentQuestion++;
			if(currentQuestion<questions.length) {
					displayQuestion();
					messageDisplay.textContent="";
				}else {
					if(correctAnswers>questions.length/2){
						messageDisplay.textContent="You passed the quiz";
					}else{
						messageDisplay.textContent="You failed the quiz";
					}
				}
		
	
		}

	
})





