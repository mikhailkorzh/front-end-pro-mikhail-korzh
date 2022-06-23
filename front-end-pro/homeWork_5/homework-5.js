//#1
const initialArray = [...Array(15)].map(() => Math.floor(Math.random() * 20));
console.log(initialArray);

//#2
const array1 = initialArray.filter(val => !(val % 3));
console.log(array1);

//#3
const array2 = initialArray.find(val => val > 7);

const warning = 'All elements are less then 7';
console.log(!(array2) ? warning : array2);

//#4
const array3 = initialArray.map(value => value * 2);
console.log(array3);

//#5
const array4 = initialArray.filter(val => !(val % 2)).reduce((val1, val2) => val1 + val2);
console.log(array4);

//#6
const array5 = [...initialArray];
array5.shift();
console.log(array5);
console.log(array5.slice(0, array5.length - 1));

//!*
//#7
const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

console.log(arrayTwo.filter(e => arrayOne.includes(e)));


console.log(isPalindrome('tenet'));

function isPalindrome(word) {
    return word.split('').reverse().join('').includes(word);
}

var myString = "[22].[44].[33].";
var myRegexp = /.*\[(\d*)*\].*\[(\d*)*\].*\[(\d*)*\].*/g;

var execResult = myRegexp.exec(myString);
console.log(execResult.length);
console.log(execResult[1]);