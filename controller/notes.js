var Note = require("../models/Note");
var makeDate = require("../scripts/date");

module.exports = {
    get: function(data, cb){
        Note.find({
            _headlineId: data._id
        }. cb);
    },
    save: function(data, cb){
        var newNote = {
            _headlineId: data._id,
            date: makeDate(),
            noteText: data.noteText
        };

        Note.create(newNote, function(err, res){
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    },
    delete: function(data, cb) {
        Note.remove({
            _id: data._id
        }, cb);
    }
}