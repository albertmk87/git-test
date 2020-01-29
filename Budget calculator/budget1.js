var budgetController=(function(){

	function Expense(id,description,value){
		this.id=id;
		this.description=description;
		this.value=value;
		this.percentage=-1;
	}

	Expense.prototype.calcPercentage= function(totalIncome){
			if(totalIncome>0){
		this.percentage=Math.round((this.value/totalIncome)*100);
	
			}else{
				this.percentage=-1;
			}
	}

	Expense.prototype.getPercentage=function(){
		return this.percentage;
	}


	function Income(id,description,value){
		this.id=id;
		this.description=description;
		this.value=value;
	}

	var data= {
		allItems:{
			exp:[],
			inc:[]
		},
		totals:{
			exp:0,
			inc:0
		},
		budget:0,
		percentage:-1	
		}


		function calculateTotal(type){
			var sum=0;
			data.allItems[type].forEach(function(element){
				sum+=element.value;
			})
				data.totals[type]=sum;
		}


		return {
				addItem:function(type,des,val){
					var newItem,ID;
					if(data.allItems[type].length>0){
						ID=data.allItems[type][data.allItems[type].length-1].id+1;
					}else{
						ID=0;
					}
					
					if(type==="exp"){
						newItem=new Expense(ID, des, val);
					}else if(type==="inc"){
						newItem=new Income(ID, des, val);
					}

					data.allItems[type].push(newItem);
					return newItem;

					
				},

				deleteItem:function(type,id){
					var index;
						var ids= data.allItems[type].map(function(current){
							return current.id;
						});

						index = ids.indexOf(id);
						if(index !== -1){
							data.allItems[type].splice(index,1);
						}
				},

				calculateBudget:function(){
					calculateTotal("exp");
					calculateTotal("inc");

			data.budget= data.totals.inc - data.totals.exp;
			data.percentage= Math.round((data.totals.exp / data.totals.inc)*100);
				},

				calculatePercentage:function(){
						data.allItems.exp.forEach(function(item){
							item.calcPercentage(data.totals.inc);
						})
				},

				getPercentage:function(){
			var allPerc=data.allItems.exp.map(function(item){
					return item.getPercentage();
				})

				return allPerc;
},
				getBudget:function(){
					return {
						budget:data.budget,
						totalInc:data.totals.inc,
						totalExp:data.totals.exp,
						percentage:data.percentage
					}

				},

				testing:function(){
					console.log(data);
				}
		} 
	

})();


var UIController=(function(){

	var DOMstrings={
		inputType:".add__type",
		inputDescription:".add__description",
		inputValue:".add__value",
		inputBtn:".add__btn",
		incomeContainer:".income__list",
		expenseContainer:".expenses__list",
		budgetLabel:".budget__value",
		incomeLabel:".budget__income--value",
		expenseLabel:".budget__expenses--value",
		percentageLabel:".budget__expenses--percentage",
		container:".container",
		percentageLabel1:".item__percentage",
		dateLabel:".budget__title--month"

	}

		return {

			getInput:function(){
				return {
				type:document.querySelector(DOMstrings.inputType).value, // exp or inc
				description:document.querySelector(DOMstrings.inputDescription).value,
				value:parseFloat(document.querySelector(DOMstrings.inputValue).value)		
				}
		
			},
			getDOMstring:function(){
				return DOMstrings;
			},

			addListItem:function(obj,type){
			var html,newHTML,element;
			//Create HTML STRING WITH A PLACEHOLRDER TEXT
			if(type==="inc"){
				element= DOMstrings.incomeContainer;
			html='<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

			}else if(type==="exp"){
				element=DOMstrings.expenseContainer;
			html='<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

			}
		
			//replace the placeholder with an actual data
			newHTML=html.replace("%id%", obj.id);
			newHTML=newHTML.replace("%description%", obj.description);
			newHTML=newHTML.replace("%value%", obj.value);
			//insert HTML into the dom
		document.querySelector(element).insertAdjacentHTML("beforeend", newHTML);
		},

			deleteListItem:function(selectorID){
					document.getElementById(selectorID).parentNode.removeChild(document.getElementById(selectorID));
			},

			displayMonth:function(){
				var arrMonth=new Array();
				arrMonth[0] = "January";
				arrMonth[1] = "February";
				arrMonth[2] = "March";
				arrMonth[3] = "April";
				arrMonth[4] = "May";
				arrMonth[5] = "June";
				arrMonth[6] = "July";
				arrMonth[7] = "August";
				arrMonth[8] = "September";
				arrMonth[9] = "October";
				arrMonth[10] = "November";
				arrMonth[11] = "December";
		var now=new Date();
		var year=now.getFullYear();
		var month=arrMonth[now.getMonth()];
		document.querySelector(DOMstrings.dateLabel).textContent=month + " " + year;


			},

			changeColor:function(){
					document.querySelector(DOMstrings.inputType).classList.toggle("red-focus");
					document.querySelector(DOMstrings.inputDescription).classList.toggle("red-focus");
					document.querySelector(DOMstrings.inputValue).classList.toggle("red-focus");

					document.querySelector(DOMstrings.inputBtn).classList.toggle("red");

			},

			clearFields:function(){
				document.querySelector(DOMstrings.inputDescription).value="";
				document.querySelector(DOMstrings.inputValue).value="";
				document.querySelector(DOMstrings.inputDescription).focus();
			},

			displayBudget:function(obj){
	document.querySelector(DOMstrings.budgetLabel).textContent=obj.budget;
	document.querySelector(DOMstrings.incomeLabel).textContent=obj.totalInc;
	document.querySelector(DOMstrings.expenseLabel).textContent=obj.totalExp;
	document.querySelector(DOMstrings.percentageLabel).textContent=obj.percentage + "%";
			},

			displayPercentage:function(percentages){
				var fields=document.querySelectorAll(DOMstrings.percentageLabel1);
				var nodeListForEach=function(list,callback){
					for(var i=0;i<list.length;i++){
						callback(list[i],i);
					}
				}
				nodeListForEach(fields,function(current,index){
					if(percentages[index]>0){

						current.textContent=percentages[index]+ "%";
					}else{
						current.textContent="______";
					}
				})
			}
			// budgetLabel:".budget__value",
		// 	incomeLabel:".budget__income--value",
		// expenseLabel:".budget__expenses--value",
		// percentageLabel:".budget__expenses--percentage"

		}

})();



var controller=(function(budgetCtrl,UICtrl){

		function setupEventListeners(){
				var DOM=UICtrl.getDOMstring();
			document.querySelector(DOM.inputBtn).addEventListener("click",function(){
				ctrlAddItem();
		})

		document.addEventListener("keypress", function(event){
			if(event.which===13){
				ctrlAddItem();
			}
		})

		document.addEventListener("change", UICtrl.changeColor);


		document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);
			
}

		function updatePercentage(){

			budgetCtrl.calculatePercentage();
			var percentage=budgetCtrl.getPercentage();

			console.log(percentage);

			UICtrl.displayPercentage(percentage);

		}

		function updateBudget(){

			budgetCtrl.calculateBudget();


			var budget=budgetCtrl.getBudget();

			UICtrl.displayBudget(budget);
		}
	
		function ctrlAddItem(){
			var input=UICtrl.getInput();  // input ima type,description i value
			
			if(input.description!=="" && !isNaN(input.value) && input.value>0){

			var newItem=budgetCtrl.addItem(input.type,input.description,input.value);

			UICtrl.addListItem(newItem, input.type);
			
			UICtrl.clearFields();

			updateBudget();

			updatePercentage();

			}

		
		} 

		function ctrlDeleteItem(event){
				var splitID,ID,type;
				var itemID=event.target.parentNode.parentNode.parentNode.parentNode.id;
				if(itemID){
					splitID=itemID.split("-");	
					type=splitID[0];
					ID=parseInt(splitID[1]);

					budgetCtrl.deleteItem(type,ID);

					UICtrl.deleteListItem(itemID);

					updateBudget();

					updatePercentage();
				}
		}

		return {
			init:function(){
				console.log("app has started");
				UICtrl.displayMonth();
				UICtrl.displayBudget({
				budget:0,
				totalInc:0,
				totalExp:0,
				percentage:-1

				});
				setupEventListeners();
			}
		}
})(budgetController,UIController);


controller.init();