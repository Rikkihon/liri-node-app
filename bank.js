// total - this should tally up all of the money in the bank balance and display it for the user.
// deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)
// withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)
// lotto - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
// For all deposits, withdrawals, or lotto purchases the transaction should be registered in the bank.txt file.

let fs = require("fs");

fs.readFile("bank.txt", "utf8", function(error, data) {

     if(error) {
         return console.log(error);
     }
     console.log(error);
     console.log(data); 

     var dataArray = data.split(",");

     console.log(dataArray); 
    })

    function total {
        for (i = 0; i < data.length; i++)
        let sum += data;
    }

    function withdraw {
        let withdraw = process.argv[2];
        let newBalance = sum - withdraw;
    }

    function lotto {
        minus -.25 
        if random number = bonus 
        add two dollars
    }