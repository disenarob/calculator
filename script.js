const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
let result = true;
let num1, num2, index = 0;
let str = "";
let maxDigits = 9;

let calculatorFunction = {
    add: false,
    multiply: false,
    subtract: false,
    divide: false,
    decimal: false
};

btns.forEach(item => {
    item.addEventListener("click", event => {
        if (!isNaN(item.id)) {
            click.number(item.id);
        }
        else if (item.id == "add") {
            click.add();
        }
        else if (item.id == "multiply") {
            click.multiply();
        }
        else if (item.id == "subtract") {
            click.subtract();
        }
        else if (item.id == "divide") {
            click.divide();
        }
        else if (item.id == "decimal") {
            click.decimal();
        }
        else if (item.id == "sum") {
            click.sum();
        }
        else if (item.id == "c"){
            clear();
        }
    })
})

const click = {
    number: function (num) {
        if (index === 0) {
            if (result) {
                num1 = num;
                str = num1;
                updateNumbers();
                result = false;
            }
            else {

                if (str.length < maxDigits) {
                    str = str + num;
                    num1 = ~~str;
                    updateNumbers();

                }

            }
        }

        else if (index === 1) {
            if (result) {
                num2 = num;
                str = num2;
                updateNumbers();
                result = false;
            }
            else {

                if (str.length < maxDigits) {
                    str = str + num;
                    num2 = ~~str;
                    updateNumbers();

                }

            }
        }
    },
    add: function () {
        result = true;
        index = 1;
        calculatorFunction.add = true;

    },
    subtract: function () {
        result = true;
        index = 1;
        calculatorFunction.subtract = true;
    },

    multiply: function () {
        result = true;
        index = 1;
        calculatorFunction.multiply = true;
    },

    divide: function () {
        result = true;
        index = 1;
        calculatorFunction.divide = true;
    },
    decimal: function () {

    },
    sum: function () {
        if (calculatorFunction.add) {
            str = calculate.add(num1, num2);
            updateNumbers();
            calculatorFunction.add = false;
        }
        else if (calculatorFunction.subtract) {
            str = calculate.subtract(num1, num2);
            updateNumbers();
            calculatorFunction.subtract = false;
        }
        else if (calculatorFunction.multiply) {
            str = calculate.multiply(num1, num2);
            updateNumbers();
            calculatorFunction.multiply = false;
        }
        else if (calculatorFunction.divide) {
            str = calculate.divide(num1, num2);
            updateNumbers();
            calculatorFunction.divide = false;
        }
       num1 = +screen.innerHTML;
    }

}

function updateNumbers() {
    screen.innerHTML = str;
}


const calculate = {
    add: function () {
        return +num1 + +num2;
    },

    subtract: function () {
        return +num1 - +num2;
    },

    multiply: function () {
        return +num1 * +num2;
    },

    divide: function () {
        return +num1 / +num2;
    }

};

function clear(){
    result = true;
num1, num2, index = 0;
str = "0";
calculatorFunction = {
    add: false,
    multiply: false,
    subtract: false,
    divide: false,
    decimal: false
};

updateNumbers();
}
