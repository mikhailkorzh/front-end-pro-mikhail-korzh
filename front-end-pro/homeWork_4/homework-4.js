//#1

const arrayOfValues = ['455', 87.15, true, undefined, 7, null, 'false', [], {}];

arrayOfValues.forEach((value, i) => {
    i++;
    const logValue = `${i}. Value ${value} is ${typeof value}.`;

    if (typeof value === 'number') {
        console.log(logValue.concat(` ${value} + 3 = ${value + 3}`));
    } else {
        console.log(logValue);
    }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////
//#2

const alphaExp = '[0-9]+';

let myArrayLength = '';
while (myArrayLength !== null){
    myArrayLength = prompt('Enter the integer number');
    if (myArrayLength.match(alphaExp) && !isNaN(myArrayLength)) {
        copyArrayAndPrint(createAndPrintNativeArray(myArrayLength));
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

function copyArrayAndPrint(array) {
    const myArrayCopy = [...array];
    for (let i = 2; i < myArrayCopy.length; i += 3) {
        myArrayCopy[i] *= 3
    }
    console.log(myArrayCopy);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//#3

const student1 = {firstName: 'Sarah', secondName: 'Connor', mark: 90};
const student2 = {...student1};
student2.mark = 45;
const student3 = Object.assign({}, student1);
student3.mark = 89;

let sum = 0;
const students = [student1, student2, student3];

students.forEach((student) => {
    sum += student.mark;
    //console.log(Object.entries(student));
    console.log(student.mark);
})
const GPA = sum / students.length;

console.log(`Avarage score is ${Math.ceil(GPA)}`);

for (const property in student1) {
    console.log(`${property}: ${[student1[property]]}`)
}

