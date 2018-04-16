//Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".
//Bonus: Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.
//Hint: console.log(process.argv) as a starting point if you are completely lost.

// var result = 0;

//   for (var i = 0; i < 2; i++){
//     (process.argv[i]);
//     (process.argv[i]);
// console.log(process.argv);
// }
//   console.log(result);

// console.log(process.argv)

 let num1  = process.argv[2];
 let num2 = process.argv[3];
 console.log(num1);
 console.log(num2);
 let number1 =(parseInt(num1));
 let number2 =(parseInt(num2));
//  console.log(number1);
//  console.log(number2);
 if(number1 % 7 ===0){
 console.log("number is divisible by 7");
 }
else if (num1 === num2){
    console.log("The numbers are equal");
    console.log('true');
}
else {
    console.log(false);
}