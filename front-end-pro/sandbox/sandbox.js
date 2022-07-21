

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

/*
const fileSystem = {
    //filename: 'text.txt',
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
                    filename: 'thisone.txt',
                    content: '768',
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

console.log(findContent(fileSystem, 'thisone.txt'));*/

//////////////////////////////////////////////////////
/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function findSum(x, sum = 0) {
    if (x === undefined || x === NaN) {
        return 'no values';
    }

    sum = sum + x.value;

    return x.next ? findSum(x.next, sum) : sum;
}

console.log(findSum(list));*/


////////////////////

/*
function createDec() {
    return (name) => `Hello ${name}`;
}
const dec = createDec();

console.log(dec('name'));

function createPipe() {
    return (text) => `===== ${text} =====`;
}

const pipeFunction = createPipe();
console.log(pipeFunction('some text you like'));*/

/*let user = {
    name: "Джон",
    age: 30,

    sayHi() {
        // this - это "текущий объект"
        alert(this.name);
};

user.sayHi();*/

/*let user = {name: "Джон"};
let admin = {name: "Админ"};

function sayHi() {
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();*/

/*let user1 = {
    firstName: "Илья",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user1.sayHi();

let user = {
    name: "Джон",
    go() {
        let arrow = () => console.log(this.name);
        arrow();
    }
}
user.go()


function makeUser() {
    return {
        name: "Джон",
        ref() {
            return this;
        }
    };
};

let user2 = makeUser();*/

//alert(user2.ref().name);


/*let calculator = {
    read() {
        this.a = +prompt('a', 0);
        this.b = +prompt('b', 0);
    },

    sum() {
        return (this.a) + (this.b);
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());*/


/*
let arr = [10, 10, 10, 10, 10, 10];

function sumTen(arr, accum = 0) {
    if (!arr.length) {
        return accum;
    }
    let temp = arr.shift(); // 10
    return sumTen(arr, (temp === 10 ? accum += temp : accum)); //sumTen(arr, 0)
}

console.log(sumTen(arr));

let arr1 = [10, 10, 10, 10, 10, 10];

function sum(arr, accum = 0) {
    if (!arr.length) {
        return accum;
    }
    let temp = arr.shift();
    accum += temp;
    return sum(arr, accum);
}

console.log(sum(arr1));

let arr2 = [10, 5, 10, 6, 10, 10];

function findValue(arr, x = []) {
    if (!arr.length) {
        return x;
    }
    let temp = arr.shift();
    if (temp > 5) {
        x.push(temp)
    }
    return findValue(arr,x);
}

console.log(findValue(arr2));*/

/*function createCounter(currentCount = 1) {
    return  () => currentCount++;
}

let counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

let city = 'Kh';

function logCity() {
    console.log(city)
};

function getCity(){
    let city = 'Ki';
    logCity();
}

getCity();


/////

let obj = {
    a: 'a',
    b: {
        c: 10,
        d: 'd',
    },
}

let obj_1 = {
    ...obj
}

obj_1.b.c = 40;

/!*
let obj_2 = Object.assign({}, obj);*!/
let obj_3 = JSON.parse(JSON.stringify(obj));

obj_3.b.c = 60;


console.log(obj);
console.log(obj_1);
console.log(obj_3);

const objNew = {
    x: 10
};

function someFunc() {
    return this.x + 10;
}

objNew.f = someFunc;
console.log(objNew.f());


/!*let objNew_1 = someFunc.bind(objNew);

console.log(objNew_1());*!/
console.log(someFunc.bind(objNew)());

const test_1 = [...Array(10)].map(() => 2);
console.log(test_1);
const test_2 = new Array(10);
test_2.map(() => 2);
console.log(test_2[0]);

let a = [];
const b = [];

a = b;

console.log([] == []);
console.log([] === []);
console.log(a === b);
console.log(a == b);
*/


let obj = {
    name: 'scotch.io',
    exec: function exec() {
        return true;
    },
}

let method1 = Object.assign({}, obj);
let method2 = JSON.parse(JSON.stringify(obj));

console.log(method1); //Object.assign({}, obj);
console.log(method2);

