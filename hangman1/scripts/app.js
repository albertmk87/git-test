async function load() {
    let url = 'http://puzzle.mead.io/puzzle';
    let obj = await (await fetch(url)).json();

let puzzleDOM=document.querySelector(".puzzle");
let remainingGuessDOM=document.querySelector("#guesses");
let statusDOM=document.querySelector("#status");
let letterGuessed=document.querySelector("#letterGuessed");
let game1;
let word=obj.puzzle;  
console.log(word);

if(word.length>8){
  game1=new Hangman(word, 8);
}else{
	game1=new Hangman(word,5);
}

puzzleDOM.textContent=game1.getPuzzle();
remainingGuessDOM.textContent=`You have ${game1.guessesLeft} guesses left`;

window.addEventListener("keypress" , (e)=>{
	if(game1.status==="playing"){
		game1.makeGuess(e.key);
		statusDOM.textContent=game1.status;
		letterGuessed.textContent=`You have already tried the following letters ${game1.guessedLetters}`;
		puzzleDOM.textContent=game1.getPuzzle();
		remainingGuessDOM.textContent=`You have ${game1.guessesLeft} guesses left`;
	}

})


}


load();