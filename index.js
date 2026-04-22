// // Variables in JavaScript
// var a = 20;
// var a = 30;
// a=50
// console.log(a);

// let b = 20;
// b = 30;
// console.log(b);

// const c = 20;
// console.log(c);
// -------------------------------------------------------------------------------------

// // Data Types in JavaScript

// // Primitive Data Types

// //1. String
// console.log(typeof("Hello"));
// console.log("123");

// //2. Number
// console.log(typeof(123));
// console.log(123);

// //3. Boolean
// console.log(typeof(true));
// console.log(true);

// //4. Undefined
// let a2;
// console.log(a2);

// //5. Null
// let a3 = null;
// console.log(a3);

// // //6. Symbol
// // console.log(typeof(Symbol('foo')));
// // console.log(Symbol('foo'));

// // //7. BigInt
// // console.log(typeof(123n));
// // console.log(123n);
// -------------------------------------------------------------------------------------

// // Non-Primitive Data Types

// //1.Array
// let exampleArr = ["one", "two", "three", "four"];
// console.log(exampleArr);
// console.log(exampleArr[0]);
// console.log(exampleArr[exampleArr.length-1]);

// //2.Object

// let exampleObj = {
//     redfruit: ["apple", "strawberry", "cherry"],
//     yellowfruit: ["banana", "lemon", "pineapple"],
//     orangefruit: "orange"
// }

// console.log(exampleObj);
// console.log(exampleObj.redfruit[0]);
// console.log(exampleObj.orangefruit);

// -------------------------------------------------------------------------------------

// //Exercise 1
// const price = 30;
// let product = "book";
// const tax = 0.1;
// console.log(product);
// let totalPrice = price + tax;
// console.log(totalPrice);
// -------------------------------------------------------------------------------------
// //Exercise 1
// var Fruitname = "Mango";
// var count = 10;
// var Price = 20;
// var total = count * Price;
// console.log(Fruitname);
// console.log(total);
// //Exercise 3
// var a =10;
// var d = a++;
// console.log(d);
// console.log(a);
// //Exercise 4 - function
// function name(){
//     console.log("Harshini");   
// }
// name();
// -------------------------------------------------------------------------------------
// var a = 10;
// var b = 20;
// function add(){
//     console.log(a+b);
// }
// add();
// -------------------------------------------------------------------------------------

// factor = "Vijay";
// fplayer = "Dhoni";
// fmovie = "M.Kumaran son of Mahalakshmi";
// function favourite(){
//     console.log("Favourite actor:", factor);
//     console.log("Favourite player:"+ fplayer);
//     console.log("Favourite movie:", fmovie);
// }
// favourite();
// -------------------------------------------------------------------------------------
// function area(length, breadth){
//  console.log(length * breadth);
// }
//area(10, 20);
// -------------------------------------------------------------------------------------
// function add(a, b){
//     return a + b;
// }
// var sum = add(10, 20);
// console.log(sum);
// //Exercise 5 
// var rain = false;
// if(rain){
//     console.log("Take an umbrella");
// }
// else{
//     console.log("Enjoy the sunshine");
// }
// -------------------------------------------------------------------------------------
// //Exercise 5 

// var season = "summer";
// if(season == "summer"){
//     console.log("Have fun in sun");
// }
// if(season == "winter"){
//     console.log("Bundle up and stay warm");
// }
// if(season == "spring"){
//     console.log("Enjoy the blooming flowers");
// }
// if(season == "autumn"){
//     console.log("Admire the colorful leaves");
// }
// -------------------------------------------------------------------------------------
// //Exercise 5 

// for(i=0;i<=5;i++){
//     console.log("Harshini");
// }

// for(i=0;i<=5;i++){
//     console.log(i);
// }

// for(i=10;i>=1;i--){
//     console.log(i);
// }

// for(i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(i=1;i<=10;i++){
//     console.log(i+"*2="+i*2);
//         }
// -------------------------------------------------------------------------------------

//Exercise 6 - Random Number Generator

// var a = Math.random();
// console.log(Math.floor(a*10)+1);

// -------------------------------------------------------------------------------------
//Excercise 7 - 

// var fruit = ["apple", "banana", "orange", "mango", "grape"];
// for(count=0;count<fruit.length;count++){
//     console.log(fruit[count]);
// }

// -------------------------------------------------------------------------------------
//deep copy and shallow copy
// let num1 = 10;
// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num1 = 20;

// console.log(num1);
// console.log(num2);

// // ------------------------------------------

// let company1employee = ['Gowtham','Harshini'];
// let company2employee = company1employee;
// console.log(company1employee);
// console.log(company2employee);

// company1employee.push('Vijay');

// console.log(company1employee);
// console.log(company2employee);

// ------------------------------------------

//array deep copy
// let company1employee = ['Gowtham','Harshini'];
// // let company2employee = JSON.parse(JSON.stringify(company1employee));
// let company2employee = [...company1employee];
// console.log(company1employee);
// console.log(company2employee);

// company1employee.push('Vijay');

// console.log(company1employee);
// console.log(company2employee);

// ------------------------------------------
//object deep copy
// let company1employee = {
//     name: "Gowtham",
//     age: 30
// };
// // let company2employee = JSON.parse(JSON.stringify(company1employee));
// // let company2employee = {...company1employee};
// let company2employee = Object.assign({}, company1employee);
// console.log(company1employee);
// console.log(company2employee);

// company1employee.name = "Harshini";

// console.log(company1employee);
// console.log(company2employee);

// // ------------------------------------------

// //spread operator deep copy and shallow copy

// let companyDetails ={
//     companyName: "Tech Solutions",
//     employees: [{"name": "Gowtham"}, {"name": "Harshini"}]
// }

// // let newDetails = {...companyDetails};
// // let newDetails = JSON.parse(JSON.stringify(companyDetails));
// // let newDetails = Object.assign({}, companyDetails);
// let newDetails = {...companyDetails, employees:[{...companyDetails.employees[0]}, {...companyDetails.employees[1]}]};
// console.log(companyDetails);
// console.log(newDetails);

// companyDetails.companyName = "Tech Innovators";
// companyDetails.employees[0].name = "Gunduzzz";

// console.log(companyDetails);
// console.log(newDetails);


// -------------------------------------------------------------------------------------

//Factory Function 

function createPerson(name){
    return {
        name,
        greeting() {
            let msg = `my name is ${name}`;
            console.log(msg);
        }
    }
}

let gowzz = createPerson("Gowtham");
let harshh = createPerson("Harshini");
gowzz.greeting();
harshh.greeting();

// let person = {
//     name: 'Gowtham',
//     age: 25,
//     interest: ['Programming'],
//     married: false,
//     address: {
//         city: 'Trichy',
//         state: 'Tamil Nadu'
//     },

//     greeting: function(){
//         let msg = `My Name is ${this.name}, i love ${this.interest}`;
//         console.log(msg);     
//     }
// }

// -------------------------------------------------------------------------------------

//Constructor Function

function Person(name){
    this.name = name;
    this.greeting = function(){
        console.log(`My name is ${this.name}`);
    }
}

let person = new Person("Harsh");
person.greeting();

// -------------------------------------------------------------------------------------

//Dynamic Nature of Object

const person1 = { 
    name: 'Harsh'
}

person1.age = 25;
person1.greeting = function(){}

console.log(person1);

delete person1.greeting;

console.log(person1);

// -------------------------------------------------------------------------------------

// Chaining function

let products = [
    {id:1, title:"Android Phone", cost:7500},
    {id:2, title:"Gaming Computer", cost:90500},
    {id:3, title:"Headphone", cost:2400}
]

let final = products.sort((a,b)=>{
    return a.cost - b.cost; //sort by ascending order
}).sort((a,b) => {
    if(a.title < b.title) return -1;

    if(a.title > b.title) return 1;

    return 1;
})
.filter((value) => value.cost <= 8000)
.map((val)=> val.title + " - Rs." + val.cost);

console.log(final);

// -------------------------------------------------------------------------------------

//Hoisting

addNoDeclaration();
//Function Declaration
function addNoDeclaration(){
    console.log("Adding no from Func. Declaration");   
}

//Function Expression

let addNoExpression = function(){
    console.log("Adding no from Func. Expression    ");  
}
addNoExpression();

// -------------------------------------------------------------------------------------

//Self Invoking Functions - IIFE
let no1 = 45844;
let no2 = 84554;

(function sumNumbers(){
    let result = no1 + no2;
    console.log(result);    
})();

(function sumNumbers(num1, num2){
    let result = num1 + num2;
    console.log("Args passed",result);    
})(no1,no2);

// -------------------------------------------------------------------------------------
