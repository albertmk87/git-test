class Budget {
	constructor(){
		this.budgetInput=document.querySelector("#budget");
		
		this.expenseName=document.querySelector("#budgetExpenseName");
		this.expenseAmount=document.querySelector("#budgetExpenseAmount");
		this.expensesContainer=document.querySelector(".aaa");
		this.budgetSpan=document.querySelector("#wholeBudgetAmount");
		this.expenseSpan=document.querySelector("#wholeExpenses");
		this.balanceSpan=document.querySelector("#wholeBalance");
		this.expenseList=0;
		this.itemList=[];
		this.itemID=0;
	}

		submitBudgetForm() {
			const value=this.budgetInput.value;
			this.budgetSpan.textContent=value;
			this.budgetInput.value="";
			this.showBalance();
		}

		submitExpenseForm() {
			const expenseName=this.expenseName.value;
			const expenseValue=parseInt(this.expenseAmount.value);
			

			let expense= {
				id:this.itemID,
				title:expenseName,
				amount:expenseValue
			}
			this.itemID++;
			this.itemList.push(expense);
			this.addExpenseInDom(expense);
			this.calculateTotalExpense();
			this.showBalance();
			this.expenseName.value="";
			this.expenseAmount.value="";
		}

		showBalance() {
			const expense=this.calculateTotalExpense();
			const budgetRemaining = parseInt(this.budgetSpan.textContent) - expense;
			this.balanceSpan.textContent=budgetRemaining;
			if(budgetRemaining>0){
				this.balanceSpan.classList.add("positive");
				this.balanceSpan.classList.remove("negative");
			}else if(budgetRemaining<0){
				this.balanceSpan.classList.remove("positive");
				this.balanceSpan.classList.add("negative");
			}else {
				this.balanceSpan.classList.remove("positive");
				this.balanceSpan.classList.remove("negative");
			}
		}

		addExpenseInDom(expense) {
			const div=document.createElement("div");
			div.classList.add("expensesContainer");
			const h6=document.createElement("h3");
			h6.classList.add("negative");

			const h5=document.createElement("h4");
			h5.classList.add("negative");
			const deleteBtn=document.createElement("span");
			const editBtn=document.createElement("span");
			editBtn.classList.add("editBtn");
			editBtn.textContent="edit";
			deleteBtn.textContent="delete";
			deleteBtn.classList.add("smallBtn");

			editBtn.addEventListener("click", (event) =>{
					this.editExpense(event);
			})

			deleteBtn.addEventListener("click", (event) => {
					this.deleteExpense(event);
				  
			})
			h6.textContent=expense.title;
			h5.textContent=`- ${expense.amount}`;
			div.appendChild(h6);
			div.appendChild(h5);
			div.appendChild(editBtn);
			div.appendChild(deleteBtn);
			this.expensesContainer.appendChild(div);
		
		}

		calculateTotalExpense() {
							let total = 0;
				    if(this.itemList.length > 0){
				      total = this.itemList.reduce(function(acc, curr){
				        acc += curr.amount;
				        return acc;
				      }, 0)
				    } 
				   this.expenseSpan.textContent = total;
				    return total;
		}

		deleteExpense(expense) {
			let expenseDom=expense.target.parentElement;
			let id=parseInt(expense.target.dataset.id);
		
			expenseDom.remove();

			let findIndex=this.itemList.findIndex(expense=> {
				return expense.id===id;
			})
				
			 this.itemList.splice(findIndex,1);
			 this.showBalance();
		}

	

	}

const newBudget=new Budget();

let budgetInputBtn=document.querySelector("#budgetBtn");

budgetInputBtn.addEventListener("click", function() {
	newBudget.submitBudgetForm();
	
})


let addExpenseBtn=document.querySelector("#budgetExpenseBtn");


addExpenseBtn.addEventListener("click", function() {
	newBudget.submitExpenseForm();
	
})










