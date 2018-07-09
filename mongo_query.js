var mongo = require('mongodb');
var mongo_client = mongo.MongoClient;
var url = 'mongodb://localhost:27017/';
mongo_client.connect(url, function(err, db){

	if(err)
		throw err;

	var dbo = db.db('ReposDB');
	dbo.collection('Repos').find().limit(5).toArray(function(err, res){
		
		if(err)
			throw err;
		
		console.log('Records:', res);
		db.close();

	});

});
