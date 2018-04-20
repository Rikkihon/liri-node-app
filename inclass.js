
// First require the peopleJSON sent to you in the other file and get the array out 
// into a variable called peopleArray

const peopleArray = require('./people.js').people;

// Write a function that takes a number and an array of objects that each contain a 
// persons name and age. The fuction should console log out a sentence saying all the 
// people over age of the number passed in are old enough to know better. Pay attention 
// to pluralization in the strings you log out! The function should not return anything.

/**
 * This function logs out statements about the age of people who are in the array
 * @param {array} people 
 * @param {number} ageToCheck
 */
const ageSorter = function(people, ageToCheck) {

  // Awesome code(probably filter and map to prepare the array then length, slice, replace and
  // lastIndexOf as well as ternaries to deal with the 'is/are' and the 'and' in the string)
  const filtered = people.filter(function(person){
    return person.age > ageToCheck
  })

  const mapped = filtered.map(function(person){
    return person.name;
  })
  let finalFormatted
  
  if(mapped > 1) {
    let string = mapped.join(', ')
    const firstFormatted = string.slice(0, string.lastIndexOf(','))
    const secondFormatted = string.slice(string.lastIndexOf(',') + 1)
    finalFormatted = firstFormatted + ' and ' + secondFormatted
  } else {
    // what goes here?
  }
 
  console.log(finalFormatted)
  // Make sure you testing the smallest measurable units and don't worry
  // about optimizing until the problem is solved. You got this!!

}


// Leave the function calls commented until you get your peopleArray declared
// (and logged!! Don't be scared to comment them back out if they are getting 
// in the way) Dont' forget ternaries to deal with the 'is/are' and the 'and' 
// in the string


// ageSorter(peopleArray, 36)
//Expected output:
// You know Josh is over 36 and old enough to know better!
ageSorter(peopleArray, 32)
//Expected output:
// You know Josh, Parker and Andrea are over 32 and old enough to know better!

// Once you are have it solved, explore alterante syntaxes!!
