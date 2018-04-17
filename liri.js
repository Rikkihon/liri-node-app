require("dotenv").config();
const keys = require("/Users/rikki/Desktop/liri-node-app/keys.js");
let fs = require("fs");
let action = process.argv[2];
let Twitter = require('twitter'); 
var client = new Twitter(keys.twitter);
var Spotify = require('node-spotify-api');


var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
  
  //Make it so liri.js can take in one of the following commands:
//* `my-tweets`
//* `spotify-this-song`
//* `movie-this`
//* `do-what-it-says`

switch (action) {
    case "my-tweets":
      tweets();
      break;
    
    case "spotify-this-song":
      spotify();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      what-it();
      break;
    }
            
   function tweets() {
       var params = {screen_name: 'spoonieluvmn'};
       client.get('statuses/user_timeline', params, function(error, tweets, response) {
       if (!error) {
       console.log(tweets);
     }
   });}

   function spotify() {
    request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function(data) {
      console.log(data); 
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
    spotify.search({type: 'track', query: 'All the Small Things' }), function(err, data, body) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      console.log("This song is called : " + JSON.parse(body).tracks);
      console.log("Here's a link to the song " + JSON.parse(body).href);
      console.log("This song appears on this albumn " + JSON.parse(body).name);
      console.log("Artists's name is  " + JSON.parse(body).artists); 
    }
  });}
  
   function movie() {
       //f the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    //If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
    //It's on Netflix!
    request("http://www.omdbapi.com/?t="+ movieName + "&y=&plot=short&apikey=trilogy"), function(error, response, body) {
        if (!error && response.statusCode === 200) {
            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            console.log("The movie's release year is: " + JSON.parse(body).Year);
            console.log("The movie's on IMDB here: " + JSON.parse(body).title);
            console.log("The movie's on IMDB here: " + JSON.parse(body).imdbID);
          }
        }
      }
