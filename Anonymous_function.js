/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(-5, 5));


document.getElementById("show").onclick = function () {
  console.log("show");     // this is made for Anonymous function only because it has no name 

// setTimeout(function elzero() {
//   console.log("Good");
// }, 2000);


}