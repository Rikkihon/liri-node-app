var fs = require("fs");

fs.readFile("bestthingsever.txt", "utf8", function(error, data) {

     if(error) {
         return console.log(error);
     }
     console.log(data); 

     var dataArray = data.split(",");

     console.log(dataArray+"/n");
}