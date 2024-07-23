// Shallow Copy
let details1={
    name:'Afifa',
    age:21,
    address:{
        pincode:28865,
        location:'ndl'
    }
}
let copy_details={...details1}
copy_details.age=80
console.log("___original___",details1)
console.log("___copy___",copy_details)


let copy_details1={...details1}
let copy_obj2={address:{pincode:123456}}
Object.assign(copy_details1,copy_obj2)

console.log("original",details1)
console.log("copied",copy_details1)


// Deep Copy
let students={
    name:'Pari',
    id:16,
    age:21,
    address:{
        place:"Ndyl",
        pincode:518501
    }
}
var copied_std=JSON.parse(JSON.stringify(students))
copied_std.address.pincode=51890
console.log(students,copied_std)


// Using Spread Operator
// Spread in Arrays
let array1=[1,2,3,4,5]
let array2=[6,7,8,9]
let newarray=[...array1,...array2]
console.log(newarray)


// Spread in Objects
let object1 = {
    place:"Nandyal",
    landmark:"Goshala"
    }
let object2 = {
    Name:"harika", 
    age:18
}

let object = {...object1, ...object2}
console.log(object)


//Rest in functions
function sum(...nums){
    let sum = nums.reduce((a, b) =>
        {return a+b})
    return sum
}
console.log("Sum of nums:",sum(9,8,7,6))


//Rest in Destructuring
let array = [10, 20, 30, 40, 50];
let [first, second, ...rest] = array;
console.log(first, second, rest)


/*output
___original___ {
    name: 'Afifa',
    age: 21,
    address: { pincode: 28865, location: 'ndl' }
  }
  ___copy___ {
    name: 'Afifa',
    age: 80,
    address: { pincode: 28865, location: 'ndl' }
  }
  original {
    name: 'Afifa',
    age: 21,
    address: { pincode: 28865, location: 'ndl' }
  }
  copied { name: 'Afifa', age: 21, address: { pincode: 123456 } }
  {
    name: 'Pari',
    id: 16,
    age: 21,
    address: { place: 'Ndyl', pincode: 518501 }
  } {
    name: 'Pari',
    id: 16,
    age: 21,
    address: { place: 'Ndyl', pincode: 51890 }
  }
  [
    1, 2, 3, 4, 5,
    6, 7, 8, 9
  ]
  { place: 'Nandyal', landmark: 'Goshala', Name: 'harika', age: 18 }
  Sum of nums: 30
  10 20 [ 30, 40, 50 ]
  */