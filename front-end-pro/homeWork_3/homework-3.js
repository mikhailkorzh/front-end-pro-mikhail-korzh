//#1
const name = prompt('Specify your name');
for (let i = 0; i < 4; i++) {
    if (i === 2) {
        console.log(`Happy birthday, dear ${name}\n`)
    } else {
        console.log('Happy birthday to you\n')
    }
    //i === 2 ? console.log(`Happy birthday, dear ${name}\n`) : console.log('Happy birthday to you\n');
}

//#2
const myValue = prompt('Specify a number');
let myString = '';
if (myValue.trim() === '' || isNaN(myValue)) {
    console.log('Invalid. You should enter a number');
} else {
    for (let i = 0; i < myValue; i++) {
        myString = myString.concat('.#')
    }
}
console.log(myString);

//#3
let myInputNumber;
let sum = 0;
let example = '';
do {
    myInputNumber = prompt('Specify your number');
    if (myInputNumber.trim() === '' || isNaN(myInputNumber)) {
        console.log('Invalid. You should enter a number');
    } else {
        for (let i = 0; i < myInputNumber; i++) {
            if (i % 2 !== 0) {
                sum += i;
                example = example.concat(`${i}+`);
            }
        }
        console.log(`Total score ${example.substr(0, example.length - 1)} = ${sum}`);
        break;
    }
} while (myInputNumber !== null);

//#4
let count = 0;
let expectedNumber;

while (true) {
    expectedNumber = Math.random();
    count++;
    if (expectedNumber > 0.7) {
        console.log(`Loop was finished because of: ${expectedNumber}\nNumber of iterations ${count}`);
        break;
    }
}

//5
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Div by 5 and 3');
    } else if (i % 3 === 0) {
        console.log('Div by 3');
    } else if (i % 5 === 0) {
        console.log('Div by 5');
    } else {
        console.log(i);
    }
}

//6
//Variant#1
console.log(new Date().toLocaleString('uk-UA', {timeZone: 'Europe/Kiev'}));

//Variant#2
const d = new Date();
console.log(new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 19));


const notebooks = [
    {name: 'Mike', sname: 'Korzh'},
    {name: 'Kris', sname: 'Roschupkina'}
];

notebooks.forEach((notebook, i) => {
    console.log(notebook.name, i);
})