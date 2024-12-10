// ? 12. Create a function named goToSecondClass()
// todo1 : destructure the object in the function argument.
// todo2 : pass ‘myClasses’ object to the function.
// todo3: The function should return this statement ==> 
  //"Time to go to {property_value} class!"

const myClasses = {
  firstHour: 'Ethics',
  secondHour: 'Programming',
  thirdHour: 'Biology',
};

//   Example Output: "Time to go to Programming class!"

// ! Answer
function goToSecondClass({hour}) {
  return `Time to go to ${myClasses[hour]} class!`;
}
console.log(goToSecondClass({ hour: 'secondHour' })); 
