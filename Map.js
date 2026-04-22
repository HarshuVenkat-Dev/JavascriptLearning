//MAP

//const myMap = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ]);

// console.log(myMap);

// -------------------------------------------------------------------------------------

const food = [
    {id: 1, title: 'Chicken Briyani', dietary: 'Non-veg',},
    {id: 2, title: 'Sambar saatham', dietary: 'Veg',},
    {id: 3, title: 'Curd rice', dietary: 'Veg',}
]

console.log(food[0].title);
const maggiIngredient = new Map();
maggiIngredient.set('water', "1.5 glass");
maggiIngredient.set('masala',1);
maggiIngredient.set('salt','o.5 spoon');
maggiIngredient.set('chilly','1 spoon');
maggiIngredient.set('chicken-masala','1 spoon');

//How to access the map data
console.log(maggiIngredient);
console.log(maggiIngredient.get('chilly'));

//How to access map size

console.log(maggiIngredient.size);

//How to check whether key exsits 

console.log("Is salt added? ",maggiIngredient.has('salt'));

//How to clear the keys and values in the map

// maggiIngredient.clear()
// console.log(maggiIngredient);

//Display map data

console.log(maggiIngredient.entries());

for(let ingredient of maggiIngredient.entries()){
    console.log(ingredient);
    console.log(ingredient[0]);
    console.log(ingredient[1]);
    console.log(ingredient[0],ingredient[1]);
}

for(let [key,value] of maggiIngredient.entries()){          // Array destructuring
    console.log(key,value);
}

//Foreach

maggiIngredient.forEach(ingredient => 
    console.log("Foreach ",ingredient)
)

//How to access key of Map

console.log("Keys of map", maggiIngredient.keys());

//How to access values of Map

console.log("Values of Map ", maggiIngredient.values());

//How to delete particular key of the map

maggiIngredient.delete("chicken-masala")
console.log(maggiIngredient);



// -------------------------------------------------------------------------------------------------

//Task - Map
const colours = new Map();
colours.set('first', 'navy blue');
colours.set('second','purple');
colours.set('third','peach');
colours.set('fourth','pink');

console.log(colours);

console.log("From get method ",colours.get("first"));

console.log('from has method ', colours.has('second'));

// colours.clear();

// console.log(colours);

colours.delete('fourth');
console.log(colours);

console.log('entries ',colours.entries());

colours.forEach(colours => console.log("foreach",colours)
)

console.log('key ',colours.keys());

console.log('values ', colours.values());


// -------------------------------------------------------------------------------------------------

const exampleMap = new Map();
exampleMap.set({},'emptyObject')
console.log(exampleMap.get({}));  // will return undefined to rectify this below we can go

const emptyObj = {};
const exampleMap1 = new Map();
exampleMap.set(emptyObj,'emptyObject')
console.log(exampleMap.get(emptyObj));

// -------------------------------------------------------------------------------------------------

//WEAKMAP

const myobj = {}
const myWeakMap = new WeakMap();
// myWeakMap.set('name','Harsh');
// console.log(myWeakMap);
myWeakMap.set(myobj,'Harsh');
console.log(myWeakMap.get(myobj));


// -------------------------------------------------------------------------------------------------


// Map groupBy()

// const inventory = [
//     {
//         'name': 'apple',
//         'type': 'fruit',
//         'quantity':10
//     },
//     {
//         'name': 'grapes',
//         'type': 'fruit',
//         'quantity':18
//     },
//     {
//         'name': 'potato',
//         'type': 'veggies',
//         'quantity':20
//     },
//     {
//         'name': 'peas',
//         'type': 'veggies',
//         'quantity':15
//     },
//     {
//         'name': 'chicken',
//         'type': 'meat',
//         'quantity':5
//     }
// ]

// const mapResult = Map.groupBy(inventory,(item) => item.type);
// console.log(mapResult);
  


// -------------------------------------------------------------------------------------------------

//OBJECT GROUPBY

// const inventory1 = [
//     {
//         'name': 'apple',
//         'type': 'fruit',
//         'quantity':10
//     },
//     {
//         'name': 'grapes',
//         'type': 'fruit',
//         'quantity':18
//     },
//     {
//         'name': 'potato',
//         'type': 'veggies',
//         'quantity':20
//     },
//     {
//         'name': 'peas',
//         'type': 'veggies',
//         'quantity':15
//     },
//     {
//         'name': 'chicken',
//         'type': 'meat',
//         'quantity':5
//     }
// ]

// const objectResult = Object.groupBy(inventory1,(item) => item.type);
// console.log(objectResult);


// -------------------------------------------------------------------------------------------------

//SET OBJECT

const dailyschedules = ["wakeup", "nutsdrink", "breakfast", "work", "lunch", "work", "snacks", "work", "dinner", "sleep"];
const dailyScheduleSet = new Set(dailyschedules);

//How to add item into set
dailyScheduleSet.add("play")
dailyScheduleSet.add({'meeting':['friends']})
console.log("original ",dailyschedules, "set ", dailyScheduleSet);

//How to check whether key exsits 
console.log(dailyScheduleSet.has("nutsdrink"));

//entries
console.log("entries ",dailyScheduleSet.entries());

//foreach
dailyScheduleSet.forEach(dailytask => console.log("foreach ",dailytask));

//How to access key of set
console.log("Keys ",dailyScheduleSet.keys());

//How to delete particular item of the set
dailyScheduleSet.delete("play")
console.log(dailyScheduleSet);

//How to clear items in the set
// dailyScheduleSet.clear();
// console.log('clear ',dailyScheduleSet);

//How to access values of set
console.log('values ',dailyScheduleSet.values());

//Size of set
console.log('size ',dailyScheduleSet.size);

const resultOLEL = document.querySelector('#result');
dailyScheduleSet.forEach(schedule => {
    resultOLEL.innerHTML += '<li>'+ schedule + '</li>'
})

// -------------------------------------------------------------------------------------------------


