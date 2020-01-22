
var dollarBill=document.querySelector("#dollar");
var people=document.querySelector("#people");
var btn=document.querySelector("button");
var bill;
var selectedValue;
var numPeople;
var calculatedTip;
var diplayTip=document.querySelector("#result");

var select=document.querySelector("select");


	dollarBill.addEventListener("keyup", function(){
			bill=parseInt(dollarBill.value);
	})


select.addEventListener("click", function(){
		selectedValue=parseInt(select.value);
})


people.addEventListener("keyup", function(){
			numPeople=parseInt(people.value);
	})


btn.addEventListener("click", function(){
	calculatedTip=getTip(bill,numPeople,selectedValue);
	diplayTip.textContent="Tip amount: " + "$" + calculatedTip + " per person";

})

function getTip(bill,pep,percent){
	let sum=0;
	sum=((bill/100)*percent)/pep;
	return sum;
}