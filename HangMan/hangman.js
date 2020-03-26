async function load() {
    let url = 'http://puzzle.mead.io/puzzle';
    let obj = await (await fetch(url)).json();


    const Hangman= function(word, remainingGuesses){
	this.word=word.toLowerCase().split("")
	this.remainingGuesses=remainingGuesses
	this.guessedLetters=[]

}

Hangman.prototype.calcStatus = function(){
	let finished=true;
		this.word.forEach(letter => {
				if(this.guessedLetters.includes(letter)){

				}else {
					finished=false;
				}	
		})

	if(this.remainingGuesses===0){
		document.querySelector("#playing").textContent="You failed"
	}else if(finished){
		document.querySelector("#playing").textContent="You WIN"
	}
}

Hangman.prototype.getPuzzle= function() {
	let puzzle=""
	this.word.forEach((letter) => {
		if(this.guessedLetters.includes(letter) || letter ===" "){
			puzzle=puzzle+letter;
		}else{
			puzzle=puzzle+"*";
		}
	})

	return puzzle;
}

Hangman.prototype.guess=function(guess) {
	guess=guess.toLowerCase()
	const isUnique=!this.guessedLetters.includes(guess)
	const isBadGuess=!this.word.includes(guess)
	if(isUnique){
		this.guessedLetters.push(guess)
	}

		if(isUnique && isBadGuess){
			this.remainingGuesses--;
		}

		this.calcStatus();
}


let wordContainer=document.querySelector("#word");
let randomNum=Math.floor(Math.random()*1000);
let input=document.querySelector("#input");
let remaining=document.querySelector("#remaining");
let randomWord=obj.puzzle;

if(randomWord.length<8)
const game1=new Hangman(randomWord,10);

wordContainer.textContent=game1.getPuzzle();


input.addEventListener("keypress", (e) => {
	if(e.keyCode===13){
		let guess=e.target.value;
		game1.guess(guess);
		wordContainer.textContent=game1.getPuzzle();
		remaining.textContent=`You have ${game1.remainingGuesses} guesses left`;
		input.value="";
	}
})

}

load();










