var https = require("https");

function getRepos(username, callback)
{
	var options = {
		host: 'api.github.com',
		path: '/users/' + username + '/repos',
		method: 'GET'
	};
	
	options.headers = {
	
		'user-agent': 'haseeb1496'
	
	};
	
	var request = https.request(options, function(response) {
	
		var body = '';
		response.on("data", function(chunk) {
	
			body = body + chunk.toString('utf8');
	
		});
	
		response.on("end", function(){
	
			var repos = [];
			var json = JSON.parse(body);
			json.forEach(function(repo) {
			
				repos.push({
					name: repo.name,
					desc: repo.description
				});		
	
			});
	
			callback(repos);
	
		});
	
	});

	request.end();
}

module.exports.mod = getRepos;
