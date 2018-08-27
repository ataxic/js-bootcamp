const aDate = new Date('January 15 1945 5:5:5')
const jDate = new Date('March 26 1975 5:5:5')

const zeroPrefix = function(number) {
    return '0' + number.toString().slice(-2)
}

if (aDate.getTime() < jDate.getTime()) {
    console.log(`${zeroPrefix(aDate.getHours())}:${zeroPrefix(aDate.getMinutes())}:${zeroPrefix(aDate.getSeconds())}`)
}

let num = 3
let string = ('0' + num).slice(-2)
console.log(string)