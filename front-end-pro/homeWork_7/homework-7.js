console.log('////////////////////////////////////Task#1///////////////////////////////////////////');

const frameworks = ['AngularJS', 'jQuery'];
frameworks.unshift('Backbone.js');
frameworks.push('ReactJS', 'Vue.js');
frameworks.splice(1, 0, 'CommonJS');
console.log(frameworks);

function findElement(arr, searchValue) {
    if (arr.length === 0) {
        return 'Empty array';
    }

    const condition = arr.find(value => value === searchValue);

    if (condition) {
        arr.splice(arr.indexOf(searchValue), 1);
        console.log(`${searchValue} is a redundant element`);
    } else {
        console.log('There are no such elements in array');
    }

}

findElement(frameworks, 'jQuery');

console.log('////////////////////////////////////Task#2///////////////////////////////////////////');

function removeNegativeElements(arr) {
    return arr.filter((val) => val >= 0 || typeof val === 'string');
}

console.log(removeNegativeElements([-9, 2, 3, 0, -28, 'value']));
console.log(removeNegativeElements([-9, -21, -12]));
console.log(removeNegativeElements(['-102', 102]));

console.log('////////////////////////////////////Task#3///////////////////////////////////////////');

function getStringElements(arr) {
    return arr.filter((val) => typeof val === 'string');
}

console.log(getStringElements([1, true, 42, 'red', 64, 'green', 'web', new Date(), -898, false]));

console.log('////////////////////////////////////Task#4///////////////////////////////////////////');

const initArray = [...Array(10)].map(() => Math.floor(Math.random() * 10));

function sum_1(array, n = 0) {
    if (n === array.length) {
        return 0;
    } else {
        return array[n] + sum_1(array, n + 1);
    }
}

function sum_2(arr) {
    return (arr.length === 0) ? 0 : arr[0] + sum_2(arr.slice(1));
}

console.log(initArray);
console.log(sum_1(initArray));
console.log(sum_2(initArray));

console.log('////////////////////////////////////Task#5///////////////////////////////////////////');

const testArr1 = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];

function sumVal(array, n = 0) {
    if (!array.length) {
        return n;
    }
    let x = array.shift();
    return sumVal(array, (x === 10 ? n += x : n));
}

console.log(sumVal(testArr1));

console.log('////////////////////////////////////Task#6///////////////////////////////////////////');

const testArr2 = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 8];

function findElements(arr, n = 0, x = []) {
    if (n === arr.length) {
        return 0;
    } else if (arr[n] > 5) {
        x.push(arr[n]);
        findElements(arr, n + 1, x);
    } else {
        findElements(arr, n + 1, x);
    }
    return x;
}

console.log(findElements(testArr2));

