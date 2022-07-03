///////////////////////////////////////Task#2///////////////////////////////////////////////

let calculator = {
    read() {
        this.x = +prompt('x', 0);
        this.y = +prompt('y', 0);
    },
    sum() {
        return (this.x) + (this.y);
    },
    multi() {
        return this.x * this.y;
    },

};

calculator.read();
alert(calculator.sum());
alert(calculator);