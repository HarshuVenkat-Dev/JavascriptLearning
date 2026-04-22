
//Array and its methods

// const thingInMind = new Array('sleeping','eating'); // Array constructor

// const fruits = ['apple','banana','Mango','Kiwi'];  //Array literal

// console.log(thingInMind, thingInMind2);
// console.log(fruits, fruits.length);// reading the array

// const user =[
//     {
//     id:1,
//     name:"Gowtham",
//     status: true
//     },
//     {
//     id:2,
//     name:"Harshini",
//     status: false
//     },
// ]

// console.log(user[1].name); // reading the array of objects

// ------------------------------------------

// adding/updating an element to thearray
// fruits.push('orange');  // adds at the end of the array
// fruits.unshift('grape'); // adds at the beginning of the array

// console.log(fruits);

// ------------------------------------------

// //removing an element from the array
// fruits.pop(); // removes the last element of the array
// fruits.shift(); // removes the first element of the array

// console.log(fruits);

// ------------------------------------------

// const myFruits = fruits.slice(1,3); // creates a new array with the selected elements
// console.log(myFruits);

// const myFruits = fruits.slice(1,3,'one','two','three'); // does not modify the original array

// const myFruits = fruits.splice(1,2,'one','two','three'); // modifies the original array by removing and adding elements
// console.log(fruits);
// console.log(myFruits);

// ------------------------------------------
//Mergeing two or more arrays

// const breakfast = ['dryfruitsdrink','banana'];
// const lunch = ['rice','paruppu']
// const dinner = ['dosa','chutney']

// const meals = breakfast.concat(lunch, dinner, 'milk'); // merges the arrays into a new array
// console.log(meals);

// const overallmeals = [...breakfast, ...lunch, ...dinner, 'milk']; // merges the arrays into a new array using spread operator
// console.log(overallmeals);

// const newFoodArr = [];
// const overallmealspush = newFoodArr.push(...breakfast, ...lunch, ...dinner, 'milk'); // merges the arrays into a new array using push method
// // console.log(overallmealspush);
// console.log(newFoodArr);

// ------------------------------------------

//Javascript array methods

const fruits = ['apple','banana','Mango','Kiwi'];

// forEach method
// fruits.forEach((fruit) => {
//     console.log(fruit);
//     console.log(fruit.toUpperCase());
// });

// ------------------------------------------

// map method
// fruits.map(fruit => {
//     console.log('fruit ',fruit.toUpperCase());
// })

// const myfruits =fruits.map(fruit => fruit.toUpperCase());
// console.log(myfruits);

// const numbers = [1,2,3,4];

// const doubledno = numbers.map(num=> num*2);
// console.log(numbers, doubledno);

// ------------------------------------------

//at method
// const characters = ['a','b','c'];

// console.log(characters[1]);
// console.log(characters.at(1));

// ------------------------------------------

//copyWithin method

// console.log(fruits.copyWithin(0,1,2));

// const fruits2 = ['apple','banana','Mango','Kiwi','grape','orange'];
// console.log(fruits2.copyWithin(0,1,2));

// console.log(fruits2.copyWithin(0,1,4));

// ------------------------------------------

//entries method

// const fruitEntries = fruits.entries();
// console.log('Entries ', fruitEntries);
// console.log('Entires next', fruitEntries.next().value)

// ------------------------------------------

//values method

// const fruitEntries = fruits.values();
// console.log('Entries ', fruitEntries);
// console.log('Entires next', fruitEntries.next().value)

// ------------------------------------------

//every method

// const marks = [44,55,66,77,88];

// const isPassed = marks.every(mark => mark >=35);
// console.log(isPassed);

// ------------------------------------------

//fill method

// const array1 = [1,2,3,4];
// const array2 = [1,2,3,4];
// const array3 = [1,2,3,4];

// console.log(array1.fill(0,2,3));
// console.log(array2.fill(6,1));
// console.log(array3.fill(8));

// ------------------------------------------

//filter method

// const humanName = ['Gow','Harsh','Venky','Mari']
// const result = humanName.filter(name => name.length > 3);
// console.log(result);

// const users = [
//     {
//         id:1,
//         name: 'Gow',
//         active: true
//     },
//     {
//         id:2,
//         name: 'Harsh',
//         active: true
//     },
//     {
//         id:3,
//         name: 'Venky',
//         active: false
//     }
// ]
// const resultuser = users.filter(user => user.active == true);
// console.log(resultuser);

// ------------------------------------------

//find method

// const number = [5,12,34,56,78];
// const result = number.find(num => num >10);
// console.log(result);

// ------------------------------------------

//findlast method 

// const number = [5,12,34,56,78];
// const result = number.findLast(num => num >10);
// console.log(result);

// ------------------------------------------

//findIndex method

// const number = [5,12,34,56,78];
// const result = number.findIndex(num => num >10);
// console.log(result);

// ------------------------------------------

//findLastIndex method

// const number = [5,12,34,56,8];
// const result = number.findLastIndex(num => num >10);
// console.log(result);

// ------------------------------------------

//flat method 

// const matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// const flatarr = [].concat(...matrix);
// console.log(flatarr);

// const flatarrES6 = matrix.flat();
// console.log(flatarrES6);

// const matrix2 = [
//     [1,2,3],
//     [4,[55,555,5555],6],
//     [7,8,9]
// ]
// const flatarr2 = matrix2.flat(2);
// console.log(flatarr2);

// ------------------------------------------

//flatmap method 

// const arr = [1,2,3]

// const arrresult = arr.flatMap(num => num === 2 ? [22,222] : 0);
// console.log(arrresult);


// ------------------------------------------

//Array.from method 

// const name = 'Harsh';
// const result = Array.from(name);
// console.log(result);

// ------------------------------------------

//Array.of method

// const result = Array.of('Harsh', 26, true);
// console.log(result);

// ------------------------------------------

//includes method

// const numbers = [1,2,3,4,5]
// const result = numbers.includes(2);
// console.log(result);

// const animals = ['dogs', 'cats', 'cow', 'fish']
// const result2 = animals.includes('cats', 2);
// console.log(result2);

// ------------------------------------------

//indexOf method

// const pets = ['dog','cat','fish','parrot']
// console.log(pets.indexOf('fish',1));

// ------------------------------------------

//lastIndexOf method

// const pets = ['dog','cat','fish','parrot','cat']
// console.log(pets.lastIndexOf('cat'));

// ------------------------------------------

//Array.isArray() method

// console.log(Array.isArray([1,2,3,4]));
// console.log(Array.isArray('Harsh'));
// console.log(Array.isArray('[1,2,3,4]'));
// console.log(Array.isArray(new Array()));
// console.log(Array.isArray(new Int8Array()));

// ------------------------------------------

//join method

// const vegetables = ['carrot','beetroot','potato','beans']
// console.log(vegetables.join());
// console.log(vegetables.join(' - '));

// ------------------------------------------

//key method 

// const fruits1 = ['banana','orange','apple','mango']
// const fruitkey = fruits1.keys();
// for(const key of fruitkey){
//     console.log(key, fruits1[key]); 
// }

// ------------------------------------------

//reduce method

// const customerSpentAmount = [450,80,720,1225]
// const totalAmount = customerSpentAmount.reduce((preVal, currtVal, currtIndex, array) =>{
//     console.log(preVal, currtVal, currtIndex, array);
//     return (preVal + currtVal)
// },0)
// console.log(totalAmount);

// ------------------------------------------

//reduceRight method

// const customerSpentAmount = [450,80,720,1225]
// const totalAmount = customerSpentAmount.reduceRight((preVal, currtVal, currtIndex, array) =>{
//     console.log(preVal, currtVal);
//     return (preVal + currtVal)
// },0)
// console.log(totalAmount);

// ------------------------------------------

//reverse method

// const fruits1 = ['banana','orange','apple','mango']
// console.log(fruits1.reverse());
// console.log(fruits1);

// ------------------------------------------

//toReversered method

// const fruits1 = ['banana','orange','apple','mango']
// console.log(fruits1.toReversed());
// console.log(fruits1);

// ------------------------------------------

//some method

// const users = [
//     {
//         id :1,
//         name : "Gowzz",
//         ticket : true
//     },
//     {
//         id :2,
//         name : "Harsh",
//         ticket : false
//     },
//     {
//         id :3,
//         name : "unknown",
//         ticket : false
//     }
// ]
// const result = users.some((user) => user.ticket === true);
// console.log(result);

// ------------------------------------------

//sort method

// const fruits1 = ['banana','orange','apple','mango'];
// console.log(fruits1.sort());
// console.log(fruits1);


// const number = [26,6,16,5,80]
// console.log(number.sort((a,b)=> a-b));
// console.log(number);

// ------------------------------------------

//toSorted method

// const fruits1 = ['banana','orange','apple','mango'];
// console.log(fruits1.toSorted());
// console.log(fruits1);


// const number = [26,6,16,5,80]
// console.log(number.toSorted((a,b)=> a-b));
// console.log(number);

// ------------------------------------------

//toLocaleString method

// const myDate = new Date('23 Aug 1998 14:10:00 UTC');
// const myLocaleDate =  myDate.toLocaleString('hi-IN')
// const myLocaleDate2 =  myDate.toLocaleString('hi-IN',{timeZone: 'Asia/Dubai'})
// console.log(myLocaleDate," - ", myLocaleDate2);

// const amount = 4156465;
// const result = amount.toLocaleString('in',{
//     style: "currency",
//     currency: 'INR'
// })
// console.log(result);

// ------------------------------------------

//toString method

// const data = ['G','O','W','z','z', 626 ,'Harsh'];
// console.log(data.toString().replaceAll(',',', '));

// ------------------------------------------

//with method

// const number = [1,2,3,4,5]
// console.log(number.with(2,'Three'));

// -------------------------------------------------------------------------------------


//Loops

//For loop

// for(let i=0; i<5; i++){
//     if(i %2 == 0){
//         console.log("Number #",i);
//     }    
// }

// ------------------------------------------

//While loop

// let i = 0
// while(i<5){
//     console.log("Number #",i);
//     i++;
// }

// ------------------------------------------

//DoWhile loop

// let i = 0;
// do{
//     console.log("Number #",i);
//     i++;
// }while(i<5)

// ------------------------------------------

//for in loop

// const person = {
//     name:'Gowtham',
//     age: '26',
//     gender:'Male'
// }
// for(let key in person){
//     console.log(key + ": "+ person[key]); 
// }

// let colors = ['red','blue','green'];
// for(let index in colors){
//     console.log(colors[index]);
// }

// ------------------------------------------

//for of loop

// let colors = ['red','blue','green'];
// for(let color of colors){
//     console.log("Colors : ", color);
// }

// -------------------------------------------------------------------------------------