//forEach
let array1 = [1,2,3,4,5]
array1.forEach((itr,index) => {
    console.log(itr)
})

//map
let array2 = [6,7,8,9,10]
let map_array = array2.map((itr,index) =>{
    return (itr*2)
})
console.log("Original array: ",array2)     //original array is not changed
console.log("Map method: ",map_array)

//filter
let array3 = [1,2,3,4,5,6,7,8,9,10]
let filter_array  = array3.filter((itr,index) =>{
    if(itr%2===0)
        return itr
})
console.log("Original array: ",array3)
console.log("Filter method: ",filter_array)

//reduce
let array4 = [1,2,3,4,5]
let sum = array4.reduce((acc,itr) => {
    return acc = acc + itr
},0)
console.log("Reduce method: ",sum)

//find
let persons = [
    {
        name: "harika",
        age: 20
    },
    {
        name: "suji",
        age: 12
    },
    {
        name: "srikanth",
        age: 22
    },
    {
        name: "giridhar",
        age: 29
    },
    {
        name: "adhya",
        age: 26
    },
]

let result_find = persons.find((person) => person.age > 25)
        console.log(result_find.name)
        
//findIndex
let result_findIndex = persons.findIndex((person) => person.age < 18)
        console.log(result_findIndex)


/*output
1
2
3
4
5
Original array:  [ 6, 7, 8, 9, 10 ]
Map method:  [ 12, 14, 16, 18, 20 ]
Original array:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
Filter method:  [ 2, 4, 6, 8, 10 ]
Reduce method:  15
giridhar
1
*/