//Numbers. Strings. Logical operators. Type Reduction.

//Task#1
const hexNum = 298;

console.log(`decimal value ${hexNum} to hexadecimal will be ${hexNum.toString(16)}`);
console.log(`decimal value ${hexNum} to binary will be ${hexNum.toString(2)}`);
console.log(123456..toString(16)); //another way
console.log((123456).toString(2)); //another way

//Task#2
const result = prompt('Input your number');
console.log(result + 1);
console.log(result - 23);
console.log(result * 2);
console.log(result / 3);

const randomString = prompt('Input your value');

console.log(`Specified string \'${randomString}'\ has ${randomString.length} symbol${randomString.length > 1 ? 's' : ''}`)

//Task#3
const bigVal = 0.51000002;
console.log(bigVal.toFixed(2) + 2);

//String
//Task#4
const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps'

const index = str.indexOf(str_two);
console.log(index);

console.log(`${str[0].toUpperCase()}${str.slice(1)}`);
console.log(str_two.toUpperCase());

//Logical operations
//Task#5
const a = 1, b = 2, c = 3, d = 3;

const val1 = a > b > c;
const val2 = b < c > c;
const val3 = c <= c || d > c;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val1 || val2 || val3);

const val4 = (a != c) && (a + b === c);
const val5 = (b != c) && (c === c);
const val6 = (c === c) && (c === d);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val4 && val5 && val6);

//*
//Task#6
const ex1 = 3;
const ex2 = '3';
let myName;
console.log(`This is no strict comparision. Example: ${ex1} == \'${ex2}'\ equals ${ex1 == ex2}`);
console.log(`This is strict comparision. Example: ${ex1} === \'${ex2}'\ equals ${ex1 === ex2}`);
console.log(`-What's your name honey? -Hmm... My name is ${myName ?? 'oops I don\'t remember...'}`);