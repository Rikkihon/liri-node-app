var Spotify = require('node-spotify-api')

var spotify = new Spotify({
    id: 'a9074fb337aa45e4b29d261db998b8a8',
    secret: '53d3955d713345f6981ecbbe4d472320'
  });
  spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  }); 