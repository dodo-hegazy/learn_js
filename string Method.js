/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let a = "TAb Academy - We love Programming";

console.log(a.length);

console.log(a.substring(2, 6));
console.log(a.substring(6, 2));
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 5, a.length - 3));
console.log(a.substring(28, 30));

console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

console.log(a.includes("We"));
console.log(a.includes("We", 8));
console.log(a.includes("TAb", 8));

console.log(a.startsWith("T"));
console.log(a.startsWith("T", 2));
console.log(a.startsWith("Academy", 4));

console.log(a.endsWith("g"));


/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log('+===================')

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "AhmedMohaned");


/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

console.log('===================')
/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

// let price = 209;
// let discount = false;
// let discountAmount = 73;
// let country = "USA";

// if (discount === true) {
//   price -= discountAmount; // price = price - discountAmount
// } else if (country === "Egypt") {
//   price -= 40;
// } else if (country === "USA") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);


/*
  Nested If
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";
let student = !true;

if (discount === true) {
  price -= discountAmount;



} else if (country === "Egypt") {

  if (student === true) {
    price -= discountAmount + 30;  // price = price - (discountAmount + 30)
  } else {
    price -= discountAmount + 10;
  }


} else {
  price -= 10;
}
console.log(price);