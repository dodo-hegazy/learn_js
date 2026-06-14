/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/
// default function parameters باختصار هو ان احط قيمة افتراضية للبراميتر في حاله عدم تمرير قيمه له

//  age = age || "Unknown";   يعني لو age غير معرفه او قيمتها undefined او not a number

function sayHello(username , age = "Unknown") {
 if (age  === undefined) {
  age = "unknown";
 }
 

  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello("Dareen"));   // Hello Dareen Your Age Is Unknown