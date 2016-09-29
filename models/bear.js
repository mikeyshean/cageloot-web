var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String
});

BearSchema.add({ gender: 'string' });

module.exports = mongoose.model('Bear', BearSchema);
