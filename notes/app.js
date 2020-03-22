
let notes=[];

const notesJSON=localStorage.getItem("notes")

if(notesJSON!==null) {
	notes=JSON.parse(notesJSON);
}


let notesContainer=document.querySelector("#notes");
let searchText=document.querySelector("#search-text");
let createNoteBtn=document.querySelector("#create-note");


let filters={
	filterText:""
}


// localStorage.clear();
const renderNotes=(notes,filters) => {
			notesContainer.innerHTML="";
			const filteredNotes=notes.filter(note =>{
				return note.name.toLowerCase().includes(filters.filterText.toLowerCase());
			})

		filteredNotes.forEach(note => {
			let aa=document.createElement("a");
			aa.setAttribute("href", `./edit1.html#${note.id}`)
			let title=document.createElement("p");
			let timeCreated=document.createElement("p");
			aa.classList.add('list-item__title');
			aa.classList.add("list-item");
			

			if(note.name.length >0){
				title.textContent=note.name;
			}else {
					title.textContent="Note without a name";
			}
			
			timeCreated.textContent=note.created;
			aa.appendChild(title);
			aa.appendChild(timeCreated);
			notesContainer.appendChild(aa);		
		})
}

renderNotes(notes,filters);


searchText.addEventListener("input", (e) => {
	filters.filterText=e.target.value;
	renderNotes(notes,filters);
})

let time=moment("12-25-1995", "MM-DD-YYYY");
createNoteBtn.addEventListener("click", ()=> {
	let id=uuidv4();
	notes.push({
		id:id,
		name:"",
		body:"",
		created:time

	})
	localStorage.setItem('notes', JSON.stringify(notes));
	location.assign(`./edit1.html#${id}`);
})


let selectedElement=document.querySelector("#filter-by");

selectedElement.addEventListener("change", function(e){
	if(this.value==="alphabetical"){
		notes.sort(function(a, b) {
   			 let textA = a.name.toUpperCase();
    		 let textB = b.name.toUpperCase();
    		 return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
		
	}else if(this.value==="byCreatedOld"){
		notes.sort(function(a, b) {
     	if(a.created>b.created){
     		return 1;
     	}else if(a.created<b.created){
     		return -1;
     	}else {
     		return 0;
     	}
});
	}

	localStorage.setItem('notes', JSON.stringify(notes));
		renderNotes(notes,filters);
})