const first = {
    name: "Rikki",
    age: 36
    };

//let second = first;

console.log(first);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax --this is a deep copy 

//pass by reference vs pass by value 

let second = Object.assign({}, first);
second.age = 44;
console.log(second);
