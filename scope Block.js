/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`); // read local first then global = 50
}

console.log(`From Global ${x}`); // read local first then global = 10