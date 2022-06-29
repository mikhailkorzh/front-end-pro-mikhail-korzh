/*const alphaExp = '[0-9]+';
let myArrayLength = '';
let sum = 0;
while (myArrayLength !== null) {
    myArrayLength = prompt('Enter the integer number');

    if (myArrayLength === null) {
        break;
    }
    if (myArrayLength.match(alphaExp) && !isNaN(myArrayLength)) {
        printAllEvenValues(createAndPrintNativeArray(myArrayLength));
        break;
    } else {
        alert('Field must contain digits only!');
    }
}

function createAndPrintNativeArray(arrayLength) {
    arrayLength = Math.floor(arrayLength);
    const myArray = [];
    for (let i = 0; i < arrayLength; i++) {
        myArray.push(getRandomIntVal(10));
    }
    console.log(myArray);

    return myArray;
}

function getRandomIntVal(val) {
    return Math.floor(Math.random() * val);
}

function printAllEvenValues(arr) {
    const res = arr
        .map((el) => parseInt(el))
        .filter((num) => num % 2 === 0)
        .reduce((total, amount) => total + amount)
    console.log(res);
}*/
/*

const elements = ['Fire', 'Air', 'Water'];

const centenceReducer = elements.reduce((val1, val2) => val1 + ' ' + val2);
console.log(elements.reduce((val1, val2) => val1 + ' ' + val2));

const values = [...Array(10)]
    .map(() => Math.floor(Math.random() * 10))
    .filter(num => num > 5);
console.log(values);

const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(every_nth(values, 3));

const elem1 = [1, 2, 3, [3, 4, 6]];
console.log(elem1);
console.log(elem1.flat());
*/


/*const elem2 = [1, 2, 10, 3, 5, 0];

console.log(elem2.find(el => el > 5));*/

/*function makeMultiply(x) {
    return function (y) {
        return x * y;
    };
}

const multiply = makeMultiply(2);
const val2 = multiply(10);

console.log(val2);

///////////////////////////////////////////////////////////////////////////
function outputFunctio (text) {
    console.log(text);
};

const outputFunctioAlert = (text) => {
    alert(text);
};

function adder(x, y, func1, func2) {
    const res = x + y;
    if (res > 5) {
        func1(res);
    } else {
        func2(res);
   */
/*
}
}
*/


const fileSystem = {
    folder: {
        filename: 'text.txt',
        content: '',
        folder: {
            filename: 'text.txt',
            content: '',
            folder: {
                filename: 'thisone.txt',
                content: 'hello',
                folder: {
                    filename: 'text.txt',
                    content: '',
                }
            }
        }
    }
}

function findContent(x, pattern, deep = 0) {
    if (x === undefined) {
        return 'no file';
    }
    return (x.filename === pattern) ? {'contest ': x.content, deep} :
        findContent(x.folder, pattern, ++deep);
}

console.log(findContent(fileSystem, 'thisone.txt'));