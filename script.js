function Calculator(num) {
    this.result = num;
    this.sum = (value) => (this.result += value);
    this.mult = (value) => (this.result *= value);
    this.sub = (value) => (this.result -= value);
    this.div = (value) => (this.result /= value);
}

function getNumber(message) {
    let answerNumber = '';
    do {
        answerNumber = prompt(message);
    } while (isNaN(answerNumber))
    return +answerNumber;
}

const number = getNumber('Enter the number');
const calc = new Calculator(number); //10

alert(calc.sum(5)); /// 15
alert(calc.mult(10)); // 150
alert(calc.sub(40)); // 110
alert(calc.div(10)); // 11
alert(calc.result); // 11