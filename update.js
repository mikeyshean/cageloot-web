
var mongoose     = require('mongoose');
mongoose.connect('mongodb://heroku_hl80bc3b:b5c376aofbfptlb47jdoe5v1s3@ds041536.mlab.com:41536/heroku_hl80bc3b');
var Bear     = require('./models/bear');


Bear.find(function(err, docs) {
  if (err) {
    console.log(err);
  } else {
    for (var i = 0; i < docs.length; i++) {
      var bear = Bear.findOne({_id: docs[i]._id}, function (err, doc) {
        if (err) return console.log(err);;

        doc.gender || (doc.gender = 'F');
        doc.save();

      });
    }
  }
  return;
})
