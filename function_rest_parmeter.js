// rsst parmeters تقدر تستخدمها في الدوال عشان تمرر عدد غير محدد من البراميترز للدالة


function calc (num1,num2,num3) {
    return num1 + num2 - num3;

}

console.log(calc(10, 20,30));  // 0


// بطريقه rest parmeters الموضوع هيبقي سلس اكتر من كدي

function calc (...numbers) {
    let result = 0;
    for (let i = 0; i<numbers.length; i++) {
        // result += numbers[i]; 
    }return `The Result Is ${result}`;
}
console.log(calc(10, 20, 30));  // The Result Is 0
