//REST OPERATOR
const sum = (...params) => {
  console.log(params);
};

sum(1, 2, 3, 4, 5);

//SPREAD OPERATOR
const numbers = [2, 12, 22];
console.log(Math.max(...numbers));
//spread multiple arras/iterables(strings,objects and arrays)
let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];
console.log(Math.max(...firstArr, ...secondArr));
//we can combine arrays with normal values
console.log(Math.max(1, 42, ...firstArr, ...secondArr, 1222));

firstArr = ["hi", "John"];
secondArr = ["Bye", "Delialah"];

// const thirdArray = firstArr.concat(secondArr); //first way
thirdArray = [...firstArr, ...secondArr]; // second way
console.log(thirdArray);

//we  can spread strings as well
const name = "john";
//spread a string into an array
console.log([...name]); //[ 'j', 'o', 'h', 'n' ]
//spread a string into an object
console.log({ ...name }); //{ '0': 'j', '1': 'o', '2': 'h', '3': 'n' }

//shallow cloning vs deep cloning of arrays/objects

let x = 5;
let y = x;
x = 7; //IT DID NOT CHANGE THE ORIGINAL

console.log(y); //5

//normal copy
let array = [1, 2, 3];
let arrayCopy = array;
console.log(arrayCopy);

arrayCopy[0] = 452; //IT  CHANGED THE ORIGINAL
console.log(arrayCopy); //[ 452, 2, 3 ]
console.log(array); //[ 452, 2, 3 ]

//Shallow copy with the spread syntax
arrayCopy = [...array];
arrayCopy[0] = 652;
console.log(arrayCopy); // it updated the arrayCopy
console.log(array); //it did NOT change te original

/////////
let nestedArray = [1, [2], 3];
let copyNestedArr = [...nestedArray];

copyNestedArr[0] = 10;
copyNestedArr[1][0] = 578;

console.log(nestedArray);
console.log(copyNestedArr);

//Recursively build copies

const createDeepCopy = (input) => {
  if (typeof input !== "object") {
    return input;
  }
  let copy = Array.isArray(input) ? [] : {};
  for (let key in input) {
    const value = input[key];
    copy[key] = createDeepCopy(value);
  }
  return copy;
};

nestedArray = [1, [2], 3];
copyNestedArr = createDeepCopy(nestedArray);

copyNestedArr[0] = 10;
copyNestedArr[1][0] = 578;

console.log(nestedArray);
console.log(copyNestedArr);
