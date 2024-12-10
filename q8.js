// ? 8. Use Array Destructuring to get all of the names from this
// Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

//! Answer :
const[firstName , [ secondName , thirdName ] , [ forthName , fifthName ]] = moreStudents;
console.log(firstName , secondName , thirdName , forthName , fifthName);