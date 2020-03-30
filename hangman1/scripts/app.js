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
remainingGuessDOM.textContent=game1.setStatusMessage();

window.addEventListener("keypress" , (e)=>{
	if(game1.status==="playing"){
		game1.makeGuess(e.key);

		letterGuessed.textContent=`You have already tried the following letters ${game1.guessedLetters}`;
		puzzleDOM.textContent=game1.getPuzzle();
		remainingGuessDOM.textContent=game1.setStatusMessage();
	}

})


}


load();