var x = require('express');

var mongo = require('mongodb');

var mongo_client = mongo.MongoClient;

var url = 'mongodb://localhost:27017/';

var routes = function(){
	
	var router = x.Router();
	
	router.route('/')
		.get(function(req,res){
	

			mongo_client.connect(url, function(err, db){
	
				if(err)
					throw err;
	
				var dbo = db.db('ReposDB');
				dbo.collection('Repos').find().toArray(function(err, users){
			
					if(err)
						res.status(500).send(err);
					else
					{
						res.json(users);
						console.log('Records:', users.length);
						db.close();
					}
	
				});
	
			});
		});
	
	router.route('/books/:bookID')
		.get(function (req, res){
	
			mongo_client.connect(url, function(err, db){
	
				if(err)
					throw err;
	
				var dbo = db.db('ReposDB');
				dbo.collection('Repos').findOne({_id:req.params.bookID}, function(err, user){
			
					if(err)
						res.status(500).send(err);
					else
					{
						res.json(user);
						console.log(req.params.bookID);
						db.close();
					}
	
				});
			});		
	
		});
	
	return router;
	
};
	
module.exports = routes;
