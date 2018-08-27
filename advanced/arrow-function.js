let cl = console.log

const square = (num) => {
    return num * num
}

const people = [{
    name: 'Jof',
    age: 43
},{
    name: 'Aat',
    age: 73

},{
    name: 'Hil',
    age: 65
}]
const underFifty = people.filter(function(person) {
    return person.age < 50
})

const overFifty = people.filter((person) => person.age > 50)
cl(overFifty)

//const isSixtyFive = people.filter((person) => person.age === 65)
const isSixtyFive = people.find((person) => person.age === 65)
cl(isSixtyFive)