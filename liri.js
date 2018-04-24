const dotenv = require("dotenv").config();
const keys = require("/Users/rikki/Desktop/liri-node-app/keys.js");
let request = require("request");
let fs = require("fs");
let actions = process.argv[2];
let SearchQs = process.argv[3];
let Twitter = require('twitter');
let textFile = process.argv[2];
let Spotify = require('node-spotify-api');
let inquirer = require("inquirer");
fs.readFile("random.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  //this part is so that it will read the file
  var dataArr = data.split(",");
});


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

inquirer.prompt([
  {
    type: "input",
     name: 'case',
    message: "Welcome to Liri. I am a partial robot.  I can read your typing and complete the task.",
    type: "list",
    message: "Choose one of these things for me to do for you today: ",
    choices: ["spotify-this-song", "movie-this", "My-Tweets"],
  },
]).then(function(user){
  let action = user.case;
  console.log(user.case);
  console.log(action);
  inquirer.prompt([
    {
      type: "input",
      name: 'songormovie',
      message: "choose a song or  movie? (This will not work for tweets)."
    }
  ]).then(function(user){
    console.log(user.songormovie);
    let SearchQ = user.songormovie;
    console.log(SearchQ); 
    console.log("Action is "+ action)
    console.log("search parameter is " + SearchQ)

    if (action == "spotify-this-song" && SearchQ == " "){
    console.log("You didn't search for a song, but try this great one: Album: Millenium");
    console.log("This song is called : I want it that way");
    console.log("Here's a link to the song: https://api.spotify.com/v1/tracks/6e40mgJiCid5HRAGrbpGA6");
    console.log("Artists's name is The Backstreet Boys")
    log.txt
    return
    }

    if (action =="movie-this" && SearchQ == " "){
    console.log("You didn't enter a movie. " )
    console.log("If you haven't watched Mr. Nobody, then you should watch it on Netflix: http://www.imdb.com/title/tt0485947'")
    fs.appendFile('random.txt', "If you haven't watched Mr. Nobody, then you should watch it on Netflix: http://www.imdb.com/title/tt0485947'",'utf8')
    return
    }
//* `My-Tweets`
//* `spotify-this-song`
//* `movie-this`
//* `do-what-it-says`

switch (action) {
  case "My-Tweets":
    tweets();
    break;

  case "spotify-this-song":
    songs(SearchQ);
    break;

  case "movie-this":
    movie(SearchQ);
    break;

  case "do-what-it-says":
    what-it();
    break;

  default:
    console.log("switch statement failed. action="+action);
}

function tweets() {
  //fs.readFile("random.txt", "utf8",)
  //var params = { statuses: 'nodejs' };
  client.get('statuses/user_timeline', function (error, tweets) {
    if (!error) {
      console.log("The most recent tweet is listed here. \n Please see the random.txt file for the last 20 (all on one line) : " + tweets[0].text);
      fs.appendFile('random.txt', tweets[0].text,  'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[1].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[2].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[3].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[4].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[5].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[6].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[7].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[8].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[9].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[10].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[11].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[12].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[13].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[14].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[15].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[16].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[17].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[18].text, 'utf8', function(err){if (err) {console.log(err)}})
      fs.appendFile('random.txt', tweets[19].text, 'utf8', function(err){if (err) {console.log(err)}})
    }
  })
  //.catch(function (err){
    //console.log("an error occurred"+ err);
  //});
}

function songs(SearchQ) {
  fs.readFile("random.txt", "utf8")
      spotify.request("https://api.spotify.com/v1/search?q=" + SearchQ + "&type=track")
      .then(function (data) {
        console.log("Album ", data.tracks.items[0].album.name);
        console.log("This song is called : " + data.tracks.items[0].name);
        console.log("Here's a link to the song " + data.tracks.items[0].href);
        console.log("Artists's name is  ");
        for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
          console.log(i + ": ", data.tracks.items[0].artists[i].name);
          fs.appendFile('log.txt', data.tracks.items[0].artists[i].name)//function(err){if (err) {console.log(err)}});
          fs.appendFile('log.txt', data.tracks.items[0].href)//function(err){if (err) {console.log(err)}});
          fs.appendFile('log.txt', data.tracks.items[0].name)//,function(err){if (err) {console.log(err)}});
          fs.appendFile('log.txt', data.tracks.items[0].album.name)//function(err){if (err) {console.log(err)}});
        }
      })
      .catch(function (err) {
        console.error('Error occurred: ' + err);
      });
    }
  

function movie(SearchQ) {
  fs.readFile("random.txt", "utf8",)
  request("http://www.omdbapi.com/?t=" + SearchQ + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
    
    if (!error && response.statusCode === 200) {
      // Parse the body of the site and recover just the imdbRating
      console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
      console.log("The movie's release year is: " + JSON.parse(body).Year);
      console.log("The movie's on IMDB here: " + JSON.parse(body).title);
      console.log("The movie's on IMDB here: " + JSON.parse(body).imdbID);
      console.log("The movie's country is : " + JSON.parse(body).country);
      console.log("The movie's plot is : " + JSON.parse(body).plot);
    }
  })
  .catch(function (error){
    console.log("Sorry, an error occurred");
  });
 } 
}).catch(err=>{
  console.log("We are sorry, Liri cannot process this for you right now");
})
})