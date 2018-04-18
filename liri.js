const dotenv = require("dotenv").config();
const keys = require("/Users/rikki/Desktop/liri-node-app/keys.js");
var request = require("request");
let fs = require("fs");
let action = process.argv[2];
let SearchQ = process.argv[3];
let Twitter = require('twitter');
//var client = new Twitter(keys.twitter);
var Spotify = require('node-spotify-api');


var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
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
    songs(SearchQ);
    break;

  case "movie-this":
    movie(SearchQ);
    break;

  case "do-what-it-says":
    what - it();
    break;
}

function tweets() {
  var params = { statuses: 'nodejs' };
  client.get('statuses/user_timeline', params, function (error, tweets) {
    if (!error) {
      console.log(tweets[0].text);
    }
  })
}

function songs(SearchQ) {
  spotify.request("https://api.spotify.com/v1/search?q=" + SearchQ + "&type=track")
    .then(function (data) {
      // console.log("Response:"); 
      // console.log(data.tracks.items[0]);
      console.log("Album ", data.tracks.items[0].album.name);
      console.log("This song is called : " + data.tracks.items[0].name);
      console.log("Here's a link to the song " + data.tracks.items[0].href);
      console.log("Artists's name is  ");
      for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
        console.log(i + ": ", data.tracks.items[0].artists[i].name);
      }
    })
    .catch(function (err) {
      console.error('Error occurred: ' + err);

    });
}
function movie(SearchQ) {
  //f the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
  //If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
  //It's on Netflix!
  request("http://www.omdbapi.com/?t=" + SearchQ + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
    
    if (!error && response.statusCode === 200) {
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
      console.log("The movie's release year is: " + JSON.parse(body).Year);
      console.log("The movie's on IMDB here: " + JSON.parse(body).title);
      console.log("The movie's on IMDB here: " + JSON.parse(body).imdbID);
    }
  })
}


var object = {

  name:"test",
  name:"test",
  name:"test",
  name:"test",
  name:"test",
  

}

