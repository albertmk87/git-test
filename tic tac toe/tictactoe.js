
let players=[0,1];
let gameBoard=[];
let squares=[...document.querySelectorAll(".square")];
let playerTurn=document.querySelector(".turn");
let currentPlayer=players[0];
let btn=document.querySelector("button");
playerTurn.textContent="Player 1 turn";
let indexElement;
let gameOver=false;
let interface=document.querySelector(".interface");


 if(!gameOver){
squares.forEach(function(s){
	s.addEventListener("click", function(){
			indexElement=squares.indexOf(s);
		   
		    if($(s).text()=="0" || $(s).text()=="X"){
		    		alert("cannto add at this square");
		    }else{
		    	if(currentPlayer===players[0]){
				this.textContent="X";
				gameBoard[indexElement]="X";
				if(gameBoard[0]==="X" && gameBoard[1]==="X" && gameBoard[2]==="X" || gameBoard[3]==="X" && gameBoard[4]==="X" && gameBoard[5]==="X" || gameBoard[6]==="X" && gameBoard[7]==="X" && gameBoard[8]==="X" || gameBoard[0]==="X" && gameBoard[3]==="X" && gameBoard[6]==="X" || gameBoard[1]==="X" && gameBoard[4]==="X" && gameBoard[7]==="X" || gameBoard[2]==="X" && gameBoard[5]==="X" && gameBoard[8]==="X" || gameBoard[0]==="X" && gameBoard[4]==="X" && gameBoard[8]==="X" || gameBoard[2]==="X" && gameBoard[4]==="X" && gameBoard[6]==="X"){
					alert("Player 1 has won");
					interface.textContent="Congratulations Player 1 has won the game";
					
				}else{
					playerTurn.textContent="Player 2 turn";
				currentPlayer=players[1];
				}
				
			}else if(currentPlayer===players[1]){
				this.textContent="0";
				gameBoard[indexElement]="0";
		if(gameBoard[0]==="0" && gameBoard[1]==="0" && gameBoard[2]==="0" || gameBoard[3]==="0" && gameBoard[4]==="0" && gameBoard[5]==="0" || gameBoard[0]==="0" && gameBoard[0]==="0" && gameBoard[8]==="0" || gameBoard[0]==="0" && gameBoard[3]==="0" && gameBoard[6]==="0" || gameBoard[1]==="0" && gameBoard[4]==="0" && gameBoard[7]==="0" || gameBoard[2]==="0" && gameBoard[5]==="0" && gameBoard[8]==="0" || gameBoard[0]==="0" && gameBoard[4]==="0" && gameBoard[8]==="0" || gameBoard[2]==="0" && gameBoard[4]==="0" && gameBoard[6]==="0"){
				alert("Player 2 has won");	
				interface.textContent="Congratulations Player 2 has won the game";
			}else{
				playerTurn.textContent="Player 1 turn";
				currentPlayer=players[0];
			}
				
			}
		    }
			

	})
})


}
function reset(){
	gameBoard=[];
	interface.textContent="";
	playerTurn.textContent="Player 1 turn";
	currentPlayer=players[0];
	squares.forEach(function(s){
		s.textContent="";	
	});
}

btn.addEventListener("click", function(){
	reset();
});