let noteID=location.hash.substring(1);

console.log(noteID);

const note=notes.find(note => {
	return note.id===noteID;
})

let noteName=document.querySelector("#note-title");
let noteBody=document.querySelector("#note-body");
let changeNoteBtn=document.querySelector("#change-note");

noteName.value=note.name;
noteBody.value=note.body;

changeNoteBtn.addEventListener("click", ()=> {
	let time=moment();
	note.name=noteName.value;
	note.body=noteBody.value;
	note.created=time;
		localStorage.setItem('notes', JSON.stringify(notes));
		location.assign("index.html");
})


let removeBtn=document.querySelector("#remove-note");
const noteIndex=notes.findIndex(note => {
	return note.id===noteID;
})

removeBtn.addEventListener("click", function(){
			removeNote(noteIndex);
})




console.log(noteIndex);

const removeNote=(i)=>{
	notes.splice(i,1);
	localStorage.setItem('notes', JSON.stringify(notes));
		location.assign("index.html");
}