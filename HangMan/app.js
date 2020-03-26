let puzzleDOM=document.querySelector(".puzzle");
let remainingGuessDOM=document.querySelector("#guesses");


const game1=new Hangman("Cat", 3);

puzzleDOM.textContent=game1.getPuzzle();
remainingGuessDOM.textContent=`You have ${game1.guessesLeft} guesses left`;

window.addEventListener("keypress" , (e)=>{
	game1.makeGuess(e.key);
	puzzleDOM.textContent=game1.getPuzzle();
	remainingGuessDOM.textContent=`You have ${game1.guessesLeft} guesses left`;
})