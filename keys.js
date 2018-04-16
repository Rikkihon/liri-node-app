
require('dotenv').config()
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//request  

//https://www.npmjs.com/package/node-spotify-api

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <a9074fb337aa45e4b29d261db998b8a8>,
  secret: 53d3955d713345f6981ecbbe4d472320
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

  //search
  var Spotify = require('node-spotify-api');
 
 var spotify = new Spotify({
   id: <your spotify client id>,
   secret: <your spotify client secret>
 });
  
 spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
   if (err) {
     return console.log('Error occurred: ' + err);
   }
  
 console.log(data); 
 });

 var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});