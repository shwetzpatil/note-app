
(function(exports) {
    function NoteList() {
        this._noteStore = []
    }
    exports.NoteList = NoteList;
})(this);

NoteList.prototype.seeList = function() {
    return this._noteStore;
}


