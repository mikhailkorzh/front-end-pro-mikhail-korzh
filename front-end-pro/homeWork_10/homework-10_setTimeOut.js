/////////////////////////////Task#1/////////////////////////////////////////

const coffeeMachine = {
    message: 'Your coffee is ready!',
}

const teaPlease = {
    message: 'Wanna some tea instead of coffee?',
}

const machineActions = {
    start: function () {
        setTimeout((function () {
            console.log(this.message)
        }).bind(this), 3000);
    }
}

machineActions.start.call(teaPlease);
machineActions.start.call(coffeeMachine);

/////////////////////////////Task#2/////////////////////////////////////////

const user_1 = {
    name: 'Matt'
}

const user_2 = {
    name: 'Tom'
}

function concatStr(phrase, divider) {
    console.log(`${phrase}${divider} ${this.name}`);
}

const hello = concatStr.bind(user_1);
hello('Hello', ',');


/////////////////////////////Task#3/////////////////////////////////////////

function showNumbers(from, to, delay) {
    setTimeout(function start() {
        if (from < to) {
            setTimeout(start, delay);
            from++;
        }
    }, delay);
}

showNumbers(5, 10, 500);

/////////////////////////////Task#4/////////////////////////////////////////
function addBase(base) {
    return function (num) {
        return base + num;
    };
}

let addOne = addBase(1);
alert(addOne(5) + addOne(3));

// на выходе будет 10. У внутренней функции есть доступ к внешней функции по области видимости. Замыкание запомнит аргумент, переданный во внешнюю функцию.
//Вычисление addOne будет выполняться стольк раз, сколько раз будет вызвана внутренняя функция.
