//task 1:

/*

let number = prompt("Enter a number: ");


if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
}
*/

//task 3

/*
let str = prompt("enter string :" );


let newString = "";


for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
}


console.log(newString);

*/

//task 4
/*
let r = Number(prompt("enter radius:"));


let area = r*r;


let Circumference = 2*3.14*r;


console.log("area= "+area);


console.log("Circumference = "+Circumference);
*/

//task 5
/*

let int1 = Number(prompt("enter first number: "));


let int2 = Number(prompt("enter second number: "));


let sum = int1+int2;


if(int1==50||int2==50||sum==50){
    console.log("true")
}
else{
    console.log("false")
}
*/



//task 6
/*
let int1 = Number(prompt("enter first number: "));


let int2 = Number(prompt("enter second number: "));


if((int1>0&&int2<0)||(int2>0&&int1<0)){
    console.log("true");
}else{
    console.log("false");
}
*/

//task 7

/*
let number =Number(prompt("Enter number :"));


if(number%5==0||number%8==0){
    console.log("true")
}else{
    console.log("false");
}
*/

//task 8


/*
let int1 = Number(prompt("enter first number: "));


let int2 = Number(prompt("enter second number: "));


let int3 = Number(prompt("enter third number: "));

if(int1>int2&&int1>int3){
    console.log("first number is larger")
}
else if(int2>int1&&int2>int3){
    console.log("Second  number is larger")

}else{console.log("third  number is larger")}

*/


//task 10
/*
let n = 5;

let string = "";

//for colums
for (let i = 1; i <= n; i++) {
    //for rows
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/

//task 11

/*
let number =Number(prompt("Enter number :"));

if(number>0){
    console.log("Number is Positive ");
}else{console.log("Number is Negative ")};
*/


//task 13
/*
let int1 = Number(prompt("enter first number: "));


let int2 = Number(prompt("enter second number: "));


let sum = int2+int1;
console.log("sum ="+sum);

*/

//task 15
/*
let operator = prompt("enter operation type(+,-,/,*)");


let int1 = Number(prompt("enter first number: "));


let int2 = Number(prompt("enter second number: "));

switch(operator)
{
    case "+":
        console.log(int1+int2)
        break;

    case "-":
        console.log(int1-int2)
        break;
     
    case "/":
        console.log(int1/int2)
        break;
      
    case "*":
        console.log(int1*int2)
        break;    
}
s*/
