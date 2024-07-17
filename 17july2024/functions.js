// Functions without Parameters
function greet(){
    console.log("Hello, World!")
}
greet()



//Functions with Parameters
function addNumbers(a, b){
    console.log("Sum: ",a+b)
}
addNumbers(80,10)



//Functions with Return Statements
function multiply(x, y){
    return x*y
}
let result=multiply(9, 8)
console.log("Product: ",result)



//Combining Functions
function calculateRectangleArea(length, width){
    return multiply(length, width)
    
}
let area=calculateRectangleArea(20, 30)
console.log("Area of Rectangle: ",area)



//Default Parameters
function greetUser(name = "Guest") {
     console.log(`Hello, ${name}!`);
}
greetUser("Anushka")
greetUser(); 
 
//Output
/*Hello, World!
Sum:  90
Product:  72
Area of Rectangle:  600
Hello, Anushka!
Hello, Guest!
*/