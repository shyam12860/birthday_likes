var graph = require('fbgraph'),
	birthday_text = ['happy', 'birthday', 'bday', 'hbd'],
	limit = 100;

graph.setAccessToken("ACCESS TOKEN");

graph.get('me/feed?limit='+limit, function(err, res) {
	if(!err){
 		res.data.forEach(function(post){
 			if('message' in post){
 				birthday_text.some(function(substring){
 					if(post['message'].toLowerCase().indexOf(substring) !== -1){
 						console.log("Liked post - ", post['message']);
 						graph.post(post['id'] + '/likes');
 						return true;
 					}
 				});
 			}
 		});
	}
});