
// /loops
//     start condtions  steps
// for([1] [2] [3]){
// block of code
// }


// for (let i=0;i<10;i++){  //start from  0 => i<10 not i<=10  , i++ ==> i=i+1 
//     //i=> index
//     console.log(i)
// }

// infinte loop


// /////////////////////////////////////////////////////////////////////////
// /loop in sequence
// let my_arr=["ali","mohamed","ahmed","aya","mona"];
// console.log(my_arr[0])
// console.log(my_arr[1])
// console.log(my_arr[2])
// console.log(my_arr[3])
// console.log(my_arr[4])

// using for  

// for (let i=0;i<5;i++){
// //    console.log(i)
//     // console.log(my_arr[0])


//     console.log(my_arr[i])
// }





// let my_arr=["ali","mohamed","ahmed","aya"]; //4 elements not 5 elements
// for (let i=0;i<5;i++){

//     // console.log(i) //problem

//     console.log(my_arr[i]) //problem
// }


// solution

// for (let i=0;i<my_arr.length;i++){


//     console.log(my_arr[i]) 
// }


// //app separate numbers and names
// let my_arr=[1,2,"ali","mohamed","ahmed",4,5,"aya","mona",10,6];


// let arr_names=[];
// for (let i=0;i<my_arr.length;i++){
//     if(typeof my_arr[i] ==='string'){
//         arr_names.push(my_arr[i])
//     }
// }

// console.log(arr_names)

// /////////////////////////////////////////////////////////////////////////


// nested loop
// let product=["keyboard","mouse","pad","pen","screen"];
// let colors=["red","green","blue"];
// let models=[2020,2021];

// for (let i=0;i<product.length;i++){
//     console.log('#'.repeat(10))
//     console.log(`#${product[i]}`)
//     // console.log(product[i])
    
//     console.log("colors: ")
//     for(let j=0;j<colors.length;j++){
//         console.log(`-${colors[j]}`)
//         // console.log(colors[j])
//     }
//     console.log("models: ")
//         for(let k=0;k<models.length;k++){
//             // console.log(`-${models[k]}`)
//             console.log(models[k])
//         }   
// }


// ///////////////////////////////////////
// break
// print to pad only
// let product=["keyboard","mouse","pad","pen","screen"];

// for(let i=0;i<3;i++){  //not dynamic
//     console.log(product[i])
// }

// another sol

// for(let i=0;i<product.length;i++){  
//     // console.log(product[i])

//     if(product[i]==="pen"){
//         break;
//     }
//     console.log(product[i])
// }



// /continue

// let product=["keyboard","mouse",10,20,"pad","pen",50,1000,"screen",40];

// for(let i=0;i<product.length;i++){  


//         console.log(product[i])

//     if(typeof product[i]==="number"){
//         continue;
//     }
//     // console.log(product[i])
// }



// /label

// let product=["keyboard","mouse","pad","pen","screen"];
// let colors=["red","green","blue"];
// mainloop:for (let i=0;i<product.length;i++){
//     console.log(product[i]);
//     nestedloop:for (let j=0;j<colors.length;j++){
//         console.log(colors[j])
//         /////
//         if (colors[j]==="green"){
//             // break; //=== break nestedloop  ==>break for nested loop  
//             break  mainloop     //==> break for orgin loop 
//         }
//     }
// }


// ////////////////////////////////////////////////////////

// advanced examble
// /////////////////////////////////////////////

// let product=["keyboard","mouse","pad","pen","screen","iphone"];
// for (let i=0;i<product.length;i++){
//     console.log(product[i])

// }

// console.log(i) ///error




// //sol
// let i=0;
// for(;i<product.length;i++){
//     // console.log(product[i])
// }
// console.log(i)



// increament
//  let i=0;
// for (;i<product.length;){
//     // i++   //not logic
//     console.log(product[i])
//     // i++;

// }



// /condtion
//  let i=0;
//  for(;;){
//     console.log(product[i])
//     i++;  //i=i+1
//     //i+=2   
//     if(i===product.length){
//         break;
//     }
    

//  }



// /////////////////////////////////////////////////////////////

// practice add product to page use html and css and java ====>53




// ////////////////////////////////////////////////////////////////////////



// /while loop ===> conditin  is true

// let index=0
// while(index<10){    
//     console.log(index)
//     index++;  /// without increament infinte loop 
    
    
    
//     if(index===3){
//         break
//     }
// }


// let product=["keyboard","mouse","pad","pen","screen","iphone"];
// let index=0
// while(index<product.length){
//     console.log(product[index])
//     index++;
// }





// ///////////////////////////////////////////////////

// do while
// let i=0;
// while(i<10){
//     console.log(i)
//     i++;
// }



// let i=0;
// while(false){
//     console.log(i)
//     i++;
// }
// console.log(i)



// let i=0;
// do{
//     i++;

//     console.log(i);
//     // i++;

// }while(false);



// console.log(i);
