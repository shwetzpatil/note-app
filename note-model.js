(function(exports) {
    function Note() {
        this.noteList = 'Hi';

    };
    exports.Note = Note;

})(this);

Note.prototype.add = function(text) {
    // console.log(text)
    return text;
};