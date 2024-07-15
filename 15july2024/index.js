// program that checks if a number is positive, negative, or zero using if-else statements
let number = -5; 

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}



//program that takes a day of the week as an input (1 for Monday,2 for Tuesday, etc. using switch case
let day = 4; 

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
        break;
}



//program using ternary operator
let age = 50; 

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);



// program that prints the numbers from 1 to 10 using a for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}




// program that prints the numbers from 10 to 1 in reverse orderusing a for loop

for (let j = 10; j >= 1; j--) {
    console.log(j);
}



/*output
The number is negative.
Thursday
Adult
1
2
3
4
5
6
7
8
9
10
10
9
8
7
6
5
4
3
2
1
*/