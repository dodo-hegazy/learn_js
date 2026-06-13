// Nested Condation //

let price = 100;
let discount = false;
let discountAmount = 30;
let student = true;
let country = "Egypt";

if (discount === true) {

    price -= discountAmount;

  } else if (country === "Egypt") {
    
     if (student === true) {

        price -= discountAmount + 30;
    } else {

        price -= discountAmount + 10;
    }

    } else {
        price -= 10;
    }
    
    


   














