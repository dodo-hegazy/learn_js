let text = "Hello JavaScript";

console.log(text.substring(0, 5)); 

console.log(text.substr(6, 10)); 

console.log(text.includes("Java")); 

console.log(text.startsWith("Hello")); 

console.log(text.endsWith("Script"));


console.log(text.substring(0, 5)); 


console.log(text.substr(6, 10)); 


console.log(text.includes("Java")); 

console.log(text.startsWith("Hello")); 

console.log(text.endsWith("Script")); 

console.log(5 == "5");   
console.log(5 === "5"); 
console.log(5 != "5");   
console.log(5 !== "5"); 

console.log(10 > 5);     
console.log(10 >= 10);   

console.log(3 < 5);      
console.log(3 <= 3);     


console.log(true && false); 
console.log(true || false); 
console.log(!true);         

let age = 18;

if (age > 18) {
  console.log("tenaager");
} else if (age === 18) {
  console.log("18");
} else {
  console.log("child");
}

let name  = 20;
let hasID = true;

if (age >= 18) {
  if (name) {
    console.log("Welcome");
  } else {
    console.log("Bring your name");
  }
} else {
  console.log("Not allowed");
}

let tenaager = 17;

let result = (age >= 18) ? "tenaager" : "child";
console.log(result);

let player = 1;

switch (player) {
  case 1:
    console.log("Ronaldo");
    break;
  case 2:
    console.log("Messi");
    break;
  case 3:
    console.log("Salah");
    break;
  default:
    console.log("New player");
}

let value1 = null;
let value2 = 0;

console.log(value1 ?? "No value");
console.log(value2 ?? "No value");
console.log(value1 || "No value");
console.log(value2 || "No value");
