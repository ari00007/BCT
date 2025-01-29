const ad = alert("Welcome to javaScript");

var x = 10;
let y = 20;
const z = 30;
let a = 3, b = 4;
let c = a + b;
console.log(c);
// string
let nm = "Priyangshu";
 //boolean 
 let d= true;
 // array Object
 const fruits=["apple","orange","pears","Banana","graphes"];
 console.log(nm)
console.log(fruits);
console.log(d);
// function
function area(a,b){
    return a*b;
}

console.log('The area is',area(5,4));
// add
function addition(a,b){
    return a+b;
}
// sub
function subtraction(a,b){
    return a-b;
}
// division 
function division(a,b){
    return a/b;
}
// multiplication
function multiplication(a,b){
    return a*b;
}
console.log(`The sum is ${addition(10,20)}`);
console.log(`The subtraction is ${subtraction(100,50)}`);
console.log(`The Multiplication is ${multiplication(5,4)}`);
console.log(`The division is ${division(40,5)}`);
const welcomeDiv = document.createElement('div');
const findSmallest = function(num1, num2) {
    return Math.min(num1, num2);
};
const input1 = prompt("Enter the first digit:");
const input2 = prompt("Enter the second digit:");
const digit1 = parseFloat(input1);
const digit2 = parseFloat(input2);
if (!isNaN(digit1) && !isNaN(digit2)) {
    const smallest = findSmallest(digit1, digit2);
    alert(`The smallest number between ${digit1} and ${digit2} is ${smallest}.`);
} else {
    alert("Please enter valid numbers.");
}
let sumarr=(arr)=>{
    let sum=0;
    for(let i=0 ; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

let crr=[22,45,32,12,16,77,28,99]
let filterr=crr.filter(val=>val>23);
console.log(`Aritra array ${crr}`);
console.log(`Dutta array ${filterr}`);
let cr=[2,5,3,12,6,7,8,9]
let filtercr=cr.filter(val=>val>10);
console.log(`Initial array ${cr}`);
console.log(`Update array ${filtercr}`);
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
    console.log("Fetching data...");
    await delay(2000);
    
    console.log("Data fetched!");
    return { data: "Sample Data" };
}
fetchData().then(result => {
    console.log(result);
}).catch(error => {
    console.error("Error:", error);
});