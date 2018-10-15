function emptyNoteStore() {
    var noteList = new NoteList()
    expect.isEmpty(noteList._noteStore.length === 0)
};

emptyNoteStore();

function seeAllNotes() {
    var note = new Note();
    var noteList = new NoteList(note);
    noteList._noteStore = ['hello']
    expect.toContain(noteList.seeList().length > 0)
};
seeAllNotes();