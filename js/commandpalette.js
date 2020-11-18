let calculator = {
    total: 0,
    add: function (number) {
        this.total += number
    },
    subtract: function (number) {
        this.total -= number
    },
    multiply: function (number) {
        this.total *= number
    },
    divide: function (number) {
        this.total /= number
    },
    operations: {
        'add': 0,
        'subtract': 0,
        'multiply': 0,
        'divide': 0,
        'total': 0,
    }
}

calculator.execute = function (key) {
    let methodName = calculator[key]
    let functionParams = [].splice.call(arguments, 1)
    return methodName.apply(calculator, functionParams)
}

const methods = ['add', 'subtract', 'multiply', 'divide']
let randomMethodKey, methodToExecute, randomNumber

while (calculator.total < 1 || Math.round(calculator.total) % 10000 !== 0) {
    randomMethodKey = Math.floor((Math.random() * 4))
    methodToExecute = methods[randomMethodKey]
    randomNumber = Math.floor((Math.random() * 8) + 1)
    calculator.operations[methodToExecute]++
    calculator.operations['total']++
    calculator.execute(methodToExecute, randomNumber)
}

console.log(calculator.total)

console.table(calculator.operations)