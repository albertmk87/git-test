

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
			}else{
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
			let word1=this.word.join("");
			this.status=`You failed the word was ${word1}`;
		}else if(youWon){
			this.status="You won";
		}else{
			this.status="playing";
		}
}

}