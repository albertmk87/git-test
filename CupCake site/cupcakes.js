var buttons=document.querySelectorAll(".buttons");
var cakeRow=document.querySelector(".cake");
var doughnutRow=document.querySelector(".doughnut");
var sweetsRow=document.querySelector(".sweets");
var cupcakeRow=document.querySelector(".cupcake");
var inputField=document.querySelector("#ourStore-input");
var allRows=document.querySelectorAll(".row");
var inputVal;
var priceBtn=document.querySelector("#priceBtn");
var checkoutDiv=document.querySelector(".checkout");
var modal=document.querySelector("#modal");
var allImages=document.querySelectorAll(".images");
var modalContent=document.querySelector(".modal-content");
var exitBtn=document.querySelector("#exit");
var rightBtn=document.querySelector("#right");
var leftBtn=document.querySelector("#left");

var imageList=[];

for(var i=0;i<allImages.length;i++){
	imageList.push(allImages[i]);
	
}

buttons.forEach(function(button){
	
	button.addEventListener("click", function(){
		var btnVal=button.value;
		if(btnVal==="cakes"){
				cakeRow.classList.remove("hide");
				doughnutRow.classList.remove("hide");
				sweetsRow.classList.remove("hide");
				cupcakeRow.classList.remove("hide");
				doughnutRow.classList.add("hide");
				sweetsRow.classList.add("hide");
				cupcakeRow.classList.add("hide");

		} else if(btnVal==="cupcakes"){
			    cakeRow.classList.remove("hide");
				doughnutRow.classList.remove("hide");
				sweetsRow.classList.remove("hide");
				cupcakeRow.classList.remove("hide");
				 cakeRow.classList.add("hide");
				doughnutRow.classList.add("hide");
				sweetsRow.classList.add("hide");
		}
		else if(btnVal==="sweets"){
				cakeRow.classList.remove("hide");
				doughnutRow.classList.remove("hide");
				sweetsRow.classList.remove("hide");
				cupcakeRow.classList.remove("hide");
				cakeRow.classList.add("hide");
				doughnutRow.classList.add("hide");
				cupcakeRow.classList.add("hide");
		}
		else if(btnVal==="doughnuts"){
			cakeRow.classList.remove("hide");
				doughnutRow.classList.remove("hide");
				sweetsRow.classList.remove("hide");
				cupcakeRow.classList.remove("hide");
					sweetsRow.classList.add("hide");
				cupcakeRow.classList.add("hide");
				cakeRow.classList.add("hide");
		}
		else if(btnVal==="all"){
			cakeRow.classList.remove("hide");
				doughnutRow.classList.remove("hide");
				sweetsRow.classList.remove("hide");
				cupcakeRow.classList.remove("hide");
		}
		
	})
})



inputField.addEventListener("keyup", function(e){
				cakeRow.classList.remove("hide");
				doughnutRow.classList.remove("hide");
				sweetsRow.classList.remove("hide");
				cupcakeRow.classList.remove("hide");
				inputVal=e.target.value.toLowerCase().trim()

				allRows.forEach(function(row){
					if(row.textContent.includes(inputVal)){
						row.classList.remove("hide");
					}else{
						row.classList.add("hide");
					}
				})
				
})

priceBtn.addEventListener("click", function(){
	checkoutDiv.classList.toggle("show");
})


allImages.forEach(function(image){
	image.addEventListener("click", function(){
		modalContent.innerHTML = "";
		var imgSrc=image.src;
		var imgElement=document.createElement("img");
		imgElement.setAttribute('src', imgSrc);
		modalContent.appendChild(imgElement);
	    modal.classList.remove("noShow");
		modal.classList.add("modal");
	})


})

exitBtn.addEventListener("click", function(){
	 modal.classList.add("noShow");
		modal.classList.remove("modal");
})



document.addEventListener("keyup", function(event){
	if(event.which==27){
			 modal.classList.add("noShow");
		modal.classList.remove("modal");
	}

})
var count=0;

rightBtn.addEventListener("click", function(){
		modalContent.innerHTML = "";
	    count++;
		if(count>=imageList.length){
			count=0;
		}
		var imgSrc=imageList[count].src;
		var imgElement=document.createElement("img");
		imgElement.setAttribute('src', imgSrc);
		modalContent.appendChild(imgElement);
	    modal.classList.remove("noShow");
		modal.classList.add("modal");


	})

leftBtn.addEventListener("click", function(){
	modalContent.innerHTML = "";
	    count--;
		if(count<=0){
			count=imageList.length-1;
		}
		var imgSrc=imageList[count].src;
		var imgElement=document.createElement("img");
		imgElement.setAttribute('src', imgSrc);
		modalContent.appendChild(imgElement);
	    modal.classList.remove("noShow");
		modal.classList.add("modal");
})