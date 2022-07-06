///////////////////////////////////////Task#1///////////////////////////////////////////////

/*const triangle = {
    setValues() {
        this.aSide = +prompt("a", 0);
        this.bSide = +prompt("b", 0);
        this.cSide = +prompt("c", 0);
    },
    getPerimeter() {
        return `Perimeter of triangle is ${this.aSide + this.bSide + this.cSide}`;
    },
    isEqualSides() {
        return (
            this.aSide === this.bSide &&
            this.bSide === this.cSide &&
            this.aSide === this.cSide
        );
    },
};

triangle.setValues();
console.log(triangle.getPerimeter());
console.log(triangle.isEqualSides());
///////////////////////////////////////Task#2///////////////////////////////////////////////

const calculator = {
    read() {
        this.x = +prompt("x", 0);
        this.y = +prompt("y", 0);
    },
    sum() {
        return this.x + this.y;
    },
    multi() {
        return this.x * this.y;
    },
    diff() {
        return this.x - this.y;
    },
    div() {
        return this.x / this.y;
    },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.multi());
console.log(calculator.diff());
console.log(calculator.div());*/


///////////////////////////////////////Task#3///////////////////////////////////////////////

const country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};


function format(start, end) {
    console.log(start + this.name + end);
};

format.call(country, '','');
format.apply(country, ['[', ']']);

format.call(country.capital, '', '');
format.apply(country.capital, ['', '']);

format.apply(country.language, ['', '']);


///////////////////////////////////////Task#4///////////////////////////////////////////////

var text = 'outside';

function logIt() {
    console.log(text);
    var text = 'inside';
};
logIt();

// получим undefined в консоли, т.к входящий параметр 'text' внутри функции не ссылается на текущую переменную text, объявленную выше. И дополнительно text =
// 'inside' объявлена после операции логгирования.
