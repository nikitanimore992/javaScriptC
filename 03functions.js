// function - 
// In JavaScript, a function is a block of code designed to 
// perform a specific task. Functions allow you to reuse code, 
// making programs more modular and efficient.


// function 8 type ke hote  hai 

//  1. Function Declaration (Named Function) 

//    यह functions को एक नाम देकर घोषित किया जाता है और code में कहीं भी उपयोग किया जा सकता है
// आप function को declare करने से पहले call कर सकते हैं।
// example - 1
greet();

function greet() {
    console.log("Hello!");
}

// example - 2

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(24));
console.log(isEven(25));


// 2. Function Expression(Anonymous function)
// इस प्रकार के function को एक variable में assign किया जाता है। 
// इसे hoisting का लाभ नहीं मिलता है, इसलिए इसे पहले declare करना जरूरी है।

const addd = function(a , b){
    return a+b;
}
console.log(addd(2,3));