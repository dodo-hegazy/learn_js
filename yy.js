let zero = 0;
let counter = 3;

let my = ["Yassen", "Hamza", "Youssef", "Mohmmad", "Frida", "laila"];

console.log(my.slice(zero, counter + 1).reverse());

console.log(my.slice(1, counter).reverse());

let word = my[2].slice(0, 2) + my[1].slice(2);
console.log(word);

console.log(word.slice(-2).split("").reverse().join(""));
