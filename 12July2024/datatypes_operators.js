// Declaring variables of different data types
let string1 = "Parimala";
let number1 = 123;
let bool1 = false;
let undefinedvar;
let nullvar = null;

console.log("string1 type: ",typeof(string1));
console.log("number1 type: ", typeof(number1));
console.log("bool1 type: ", typeof(bool1));
console.log("undefinedvar type: ", typeof(undefinedvar));
console.log("nullvar type: ",typeof(nullvar));

//Mathematical Operators
let num1 = 12;
let num2 = 3;

console.log("Addition:", num1 + num2);       
console.log("Subtraction:", num1 - num2);    
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);       
console.log("Modulus:", num1 % num2);


//Comparator Operators
let a = 9;
let b = 20;
let c = 9;
let d = "9";

console.log("a === b:", a === b); // false
console.log("a === c:", a === c); // true
console.log("a != b:", a != b);   // true
console.log("a !== b:", a !== b); // true
console.log("a > b:", a > b);     // false
console.log("a == b:", a == b);   // false
console.log("a < b:", a < b);     // true
console.log("a >= b:", a >= b);   // false
console.log("a <= b:", a <= b);   // true

console.log("c == d:",  c == d);   // true (loose equality) - typecast c into string and values are equal
console.log("c === d:", c === d); // false (strict equality) - checks datatype and value
console.log("c != d:",  c != d);   // false (loose inequality)
console.log("c !== d:", c !== d); // true (strict inequality)



// OUTPUT
// string1 type:  string
// number1 type:  number
// bool1 type:  boolean
// undefinedvar type:  undefined
// nullvar type:  object
// Addition: 15
// Subtraction: 9
// Multiplication: 36
// Division: 4
// Modulus: 0



