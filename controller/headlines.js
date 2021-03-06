var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

var Headline = require("../models/Headline");

module.exports = {
    fetch: function(cb){
        scrape(function(data){
            var articles = data;
            for (let i = 0; i < articles.length; i++) {
                articles[i].date = makeDate();
                articles[i].saved = false;
            }

            Headline.collection.insertMany(articles, {ordered:false}, function(err, res){
                cb(err, res);
            });
        });
    },
    delete: function(cb){
        Headline.remove(query, cb);
    },
    get: function(query, cb){
        Headline.find(query)
        .sort({
            _id: -1
        })
        .exec(function(err, res){
            cb(res);
        })
    },
    update: function(query, cb){
        Headline.update({_id: query._id}, {
            $set: query
        }, {}, cb);
    }
}