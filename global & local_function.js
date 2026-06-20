/*
  Scope
  - Global And Local Scope
*/


// Example from me 

// read local first then global 
// if local not exist then read global

const a = 1;
let b = 2;
var c = 3;

function showText() {
  const a = 10;
  let b = 20;       // read local first then global 
var c = 30;   
    // if local not exist then read global
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();