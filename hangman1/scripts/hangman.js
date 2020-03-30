

class Hangman {
	constructor(word,guessesLeft,guessedLetters,status){
		this.word=word.toLowerCase().split("");
		this.guessesLeft=guessesLeft;
		this.guessedLetters=[];
		this.status="playing";
	}

	getPuzzle(){
		let puzzle="";
		this.word.forEach(letter=>{
			if(this.guessedLetters.includes(letter)){
					puzzle+=letter;
			}else if(letter===" "){
				puzzle+=" ";
				this.guessedLetters.push(" ");
			}

			else{
				puzzle+="*";
			}
		})
		return puzzle;
	}

	makeGuess(guess){
		guess=guess.toLowerCase();
		const isUniqueGuess=!this.guessedLetters.includes(guess);
		const isBadGuess=!this.word.includes(guess);
	
		if(isUniqueGuess) {
			this.guessedLetters.push(guess);
		}
		if(isUniqueGuess && isBadGuess) {
			this.guessesLeft--;
		}
		this.setStatus();
	}

	setStatus(){
		let youWon=true;
		this.word.forEach(letter=>{
			if(this.guessedLetters.includes(letter)){
						
							}else {
								youWon=false;
							}
		})

		if(this.guessesLeft===0){
			
			this.status=`failed`;
		}else if(youWon){
			this.status="finished";
		}else{
			this.status="playing";
		}
}

	setStatusMessage(){
		if(this.status==="playing"){
			return `You are still playing and you have ${this.guessesLeft} guesses`;
		}else if(this.status==="finished"){
			return `Congratulations you won`;
		}else if(this.status==="failed"){
			return `You lost and the word was ${this.word.join(" ")}`;
		}
	}

}