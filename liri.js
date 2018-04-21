require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var keys = require ('./key.js');
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);



spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
console.log(data.tracks.items[0].album.artists[0].name);
console.log(data.tracks.items[0].album.external_urls);
console.log(data.tracks.items[0].album.name);
  });




  
  if (process.argv[2] === 'my-tweets'){
    var params = {screen_name: 'gtcodingbootcam'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      for (var i=0; i < tweets.length; i++){
        console.log(tweets[i].created_at);
        console.log(tweets[i].text);
      }
  }
  else{
      console.log(error)
  }
});
  }

  console.log(process.argv[2]);

//=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  var request = require('request');

  request('http://www.omdbapi.com/?i=tt3896198&apikey=f84ef2c3', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  
});

