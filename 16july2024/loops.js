// program that prints the multiplication table of 5 using a for loop.

let num=5
for(let i=1; i<=10; i++){
    console.log(`${num} x ${i} = ${num * i}`)
}

// program that calculates and prints the sum of all even numbers between 1 and 50 using a for loop.

let sum=0
for(let i=2; i<=50; i+=2){
    sum += i
}
console.log("Even Sum: "+sum)

// a program that prints prime numbers from 2 to 20 using a while loop.

let num1=2
 while(num1<=20){
    let isPrime=0
    for(let j=2;j<num1;j++){
        if(num1%j==0){
            isPrime=1
            break
         }
     }
     if(isPrime==0)
        console.log(num1)
 num1++
 }

 // program that calculates and prints the sum of all odd numbers between 1 and 20 using a while loop.

 let oddsum = 0;
  let num3 = 1;
  while (num3 <= 20) {
    if (num3 % 2 !== 0) {
      oddsum += num3;
    }
    num3++;
  }
  console.log("Oddsum: "+oddsum)

  //a program that calculates and prints the factorial of a given number

  let result = 1;
  let factnum = 3;
  let temp =  factnum;
  while (factnum > 0) {
    result *= factnum;
    factnum--;
  }
  console.log(`Factorial of ${temp}: ${result}`);


  //output
/*5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
Even Sum: 650
2
3
5
7
11
13
17
19
Oddsum: 100
Factorial of 3: 6 
*/