//using array methods
console.log("1. push and pop")
let arr = []
arr.push(1,2,3)
console.log(arr)
arr.pop()
console.log(arr)

console.log("2. Shift and Unshift")
let arr1 = ['a','b','c']
arr1.shift()
console.log(arr1)
arr1.unshift('z')
console.log(arr1)

console.log("3. Slice")
let arr2 = [1,2,3,4,5]
let slicedarr2 = arr2.slice(1,4)
console.log(slicedarr2)
console.log(arr2)

console.log("4. Splice")
let arr3 = ["red", "green", "blue", "yellow"]
let splicedarr3 = arr3.splice(2,1,"purple","orange")
console.log(splicedarr3)
console.log(arr3)

// Creating and Manipulating Objects
console.log("1. Object Creation")
let car = {
    make: "Audi",
    model: "A4",
    year: 1997
}
console.log(car)

console.log("2. Property Deletion")
delete car.year
console.log(car)

console.log("3. Nested Objects")
let person = {
    name: "Parimala",
    age: 21,
    address: {
        street: "SBI Colony",
        city: "Nandyal",
        zipcode: 518501
    }
}
console.log(person)

console.log("Accessing Object Properties")
console.log(person.address.city)

//Arrow Functions
greet = (name) => `Hello,${name}!`;
console.log(greet("Harika"));


/*output
1. push and pop
[ 1, 2, 3 ]
[ 1, 2 ]
2. Shift and Unshift
[ 'b', 'c' ]
[ 'z', 'b', 'c' ]
3. Slice
[ 2, 3, 4 ]
[ 1, 2, 3, 4, 5 ]
4. Splice
[ 'blue' ]
[ 'red', 'green', 'purple', 'orange', 'yellow' ]
1. Object Creation
{ make: 'Audi', model: 'A4', year: 1997 }
2. Property Deletion
{ make: 'Audi', model: 'A4' }
3. Nested Objects
{
  name: 'Parimala',
  age: 21,
  address: { street: 'SBI Colony', city: 'Nandyal', zipcode: 518501 }
}
Accessing Object Properties
Nandyal
Hello,Harika!
*/