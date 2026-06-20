/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

function sayHowOldAreYou(userName, yearsOld) {
  console.log(`Hi ${userName}, you are ${yearsOld} years old.`);
}

sayHowOldAreYou("Osama", 30);
sayHowOldAreYou("Sayed", 25);
sayHowOldAreYou("Ali", 35);

console.log(typeof console.log); // function


// Example from me 

let resturent = function (name, location) {
  return `The resturent name is ${name} and it is located in ${location}`;

  
}
console.log(resturent("Dominos", "Cairo"));