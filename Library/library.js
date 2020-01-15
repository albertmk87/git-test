let myLibrary = [
	
];

let btn=document.querySelector("button");

let result=document.querySelector("#result");

btn.addEventListener("click", function(){
	addBook();
	render();
	
})

function Book(author,title,numPages,isRead){
	this.author=author;
	this.title=title;
	this.numPages=numPages;
	this.isRead=isRead;
}

function addBook(){
	let author=document.querySelector("#author").value;
	let title=document.querySelector("#title").value;
	let numPages=document.querySelector("#numPages").value;
	let isRead=document.querySelector("#check");
	if(isRead.checked){
        isRead = 'true';
    }

	newBook=new Book(author,title,numPages,isRead);
	myLibrary.push(newBook);
}

function render(){
	
    result.textContent = '';
		for(let i=0;i<myLibrary.length;i++){
			let div1=document.createElement("div");
			let span1=document.createElement("span");
			span1.textContent=" X";
			span1.addEventListener("click",function(){
				result.removeChild(div1);
				
			})
			let status="";
			if(myLibrary[i].isRead=="true"){
				status=": READ";
			}else{
				status=": NOT READ";
			}
				div1.textContent=myLibrary[i].author + " " + myLibrary[i].title + " " + myLibrary[i].numPages + " " + status;
				div1.appendChild(span1);
				result.appendChild(div1);
		}

}


    
