var friends = require("../data/friends");


module.exports = function(app) {
 
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    app.post("/api/survey", function(req, res) {
        var bestFriend = {
            name: "",
            photo: "",
            score: 1000

        };
        var user = req.body;
        var userScores = user.scores;

        for (var i = 0; i < friends.length; i++){
            var currentFriend = friends[i];
            var currentScore = currentFriend.scores;
            var totalDiff = 0;

            for (var x = 0; x < currentScore.length; x++){
                var diff = Math.abs(parseInt(currentScore[x]) - parseInt(userScores[x]));
                totalDiff += diff;

            }
            if (totalDiff < bestFriend.score){
                bestFriend.name = currentFriend.name
                bestFriend.photo = currentFriend.photo
                bestFriend.score = totalDiff

            };
        }
        
        friends.push(user);
        res.json(bestFriend);
      
    });
}