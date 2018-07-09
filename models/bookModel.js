var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema ({
	
	name:{
		type: String
	},
	desc:{
		type: String		
	}

});


module.exports = mongoose.model('Book', bookModel);
