const dotenv = require("dotenv").config();
//const keys = require("/Users/rikki/Desktop/liri-node-app/keys.js");
var request = require("request");
let fs = require("fs");
let action = process.argv[2];
let Twitter = require('twitter'); 

 
//var client = new Twitter(keys.twitter);
//var url = "https://api.twitter.com/1.1/statuses/lookup.json?id=20,432656548536401920";

var client = new Twitter({
    consumer_key: 'HPbciZS6ulmI810KiwGx6Sk2F',
    consumer_secret: 'DnwYGdqBcSjQJkWSWH0sxDF0LH9qv1iUzNvsjXUz1QCGm35jYL',
    access_token_key: '17997484-L7K0eX7YFxxOiOPCtbHBn3Sall6EqwjcGahZXhvMY',
    access_token_secret: 'hNAbj9ivLzBwcLYm9sBlM3LBp7w2lhJu4gUKFGlKQlPdP'
    
  });

var params = {
q: 'node.js',
count: 5
} // this is the param variable which will have key and value 
client.get('search/tweets', params, function(error, tweets, response){
    console.log(error);
    console.log(tweets)
})
    // .then(function (searchedData){
    //     console.log(searchedData)
    // }).catch(function(error){
    //     console.log(error)
    // })
