//**********************Task#1**************************************

const buildArray = function fillArray(arrayLength, arrayContent) {
    return [...Array(arrayLength)].map(() => arrayContent);
}

console.log(buildArray(10, 'qwerty'));


//**********************Task#2**************************************

const array = [0, 1, 2, null, undefined, 'qwerty', false];

//example_1
function filterArray(arr) {
    return (...args) => arr.filter(e => !(args.includes(e)));
}

const result = filterArray(array);
console.log(result(false, undefined, '', 0, null));

//example#2
const result_1 = function (array) {
    return array.filter(Boolean);
}
console.log(result_1(array));

//example#3 Like int the homework example
function filter(...arr) {
    const nativeArray = arr[0];
    return nativeArray.filter(e => !(arr.slice(1).includes(e)));
}

console.log(filter(array, false, undefined, '', 0, null));


//**********************Task#3**************************************

//example_1
function calcSum(...args) {
    return args.reduce((val1, val2) => val1 + val2);
}

console.log(calcSum(5, 0, 10, 1, 5));
console.log(calcSum(0));
console.log(calcSum(1, 2, 3));

//example_2

function calcSum1() {
    return Array.from(arguments).reduce((val1, val2) => val1 + val2);
}

console.log(calcSum1(5, 0, 10, 1, 5));

//example_3

function calcSum2() {
    return [].slice.call(arguments).reduce((val1, val2) => val1 + val2);
}

console.log(calcSum2(5, 0, 10, 1, 5));


//**********************Task#4**************************************

function createPipe() {
    return (text) => `===== ${text} =====`;
}

const pipeFunction = createPipe();
console.log(pipeFunction('some text you like'));


//**********************Task#5**************************************
const random_boolean = Math.random() < 0.5;

function printArgument(text, printMethod1, printMethod2) {
    if (!random_boolean) {
        printMethod1(text);
    } else {
        printMethod2(text);
    }
}

const showInConsole = (text) => {
    console.log(text);
}

const showInAlert = (text) => {
    alert(text);
};

printArgument('Hello', showInAlert, showInConsole);