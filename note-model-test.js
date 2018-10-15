function showNote() {
    var note = new Note();
    expect.isTrue(note.noteList === 'Hi');
};
showNote();

function addNoteText() {
    var note = new Note();
    expect.isTrue(note.add("My fav language is JS") === "My fav language is JS");
}; 
addNoteText();