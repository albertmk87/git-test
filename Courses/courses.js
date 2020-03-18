

let customer=document.querySelector("#customer");
let course=document.querySelector("#course");
let author=document.querySelector("#author");
let courselistContainer=document.querySelector(".course-list");
let rowContainer=document.querySelector(".row");
let inputs=document.querySelectorAll("input");
let form=document.querySelector("#form");

customer.classList.add("redClass");
course.classList.add("redClass");
author.classList.add("redClass");


let cards=[
{
	name:"Albert",
	course:"Javascript",
	author:"Albert"
},
{
	name:"Albert1",
	course:"Javascript",
	author:"Albert"
}

]


inputs.forEach(input => {
	input.addEventListener("change", function(){
		let value=this.value;
	if(value!==""){
		this.classList.add("greenClass");
		this.classList.remove("redClass");
	}else{
		this.classList.remove("greenClass");
		this.classList.add("redClass");
	}
	})
	

})


const showCards= function(cards){
	rowContainer.innerHTML="";
		cards.forEach((card,index) => {

			let divContent=document.createElement("div");
			divContent.classList.add("col-md-6");
			divContent.classList.add("col-lg-4");
			let image=document.createElement("img");
			image.setAttribute("src", `cust-${index}.jpg`);
			let divCard=document.createElement("div");
			divCard.classList.add("card");
			let headerName=document.createElement("h6");
			let headerNameSpan=document.createElement("p");
			let courseName=document.createElement("p");
			let authorName=document.createElement("p");
			// headerNameSpan.classList.add("btn");
			// headerNameSpan.classList.add("btn-warning");
			headerNameSpan.textContent=`Name: ${card.name}`;
			courseName.textContent=`Course: ${card.course}`;
			authorName.textContent=`Author: ${card.author}`;
		
			
			divCard.appendChild(headerNameSpan);
			divCard.appendChild(courseName);
			divCard.appendChild(authorName);
			divContent.appendChild(image);
			divContent.appendChild(divCard);
			rowContainer.appendChild(divContent);

		})
}

showCards(cards);





form.addEventListener("submit", function(e){
	e.preventDefault();
		let cardName=customer.value;
		let cardCourse=course.value;
		let cardAuthor=author.value;
		cards.push({
			name:cardName,
			course:cardCourse,
			author:cardAuthor
		})

		showCards(cards);
})




