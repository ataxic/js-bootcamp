let cl = console.log
const add = function() {
    return (arguments[0] + arguments[1])
}

cl(add(11,22,33,44))


const car = {
    colour: 'red',
    function: getColour = function() {
        cl(`The car is ${this.colour}`)
    }
}

cl(car.function())