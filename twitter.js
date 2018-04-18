var Twitter = require('twitter');

var client = new Twitter({
        consumer_key: 'HPbciZS6ulmI810KiwGx6Sk2F',
        consumer_secret: 'DnwYGdqBcSjQJkWSWH0sxDF0LH9qv1iUzNvsjXUz1QCGm35jYL',
        access_token_key: '17997484-L7K0eX7YFxxOiOPCtbHBn3Sall6EqwjcGahZXhvMY',
        access_token_secret: 'hNAbj9ivLzBwcLYm9sBlM3LBp7w2lhJu4gUKFGlKQlPdP'
    
      });
var params = {statuses: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets) {
  if (!error) {
    console.log(tweets[0].text);
  }
});