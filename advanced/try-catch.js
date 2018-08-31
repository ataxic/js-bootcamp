var cl = console.log
const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
    
}

try {
    const result = getTip(true)
    cl(result)
} catch(e) {
    cl(`catch block ${e}`)
}

