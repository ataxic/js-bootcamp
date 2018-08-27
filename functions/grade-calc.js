let getResult = function(score) {
    let maxScore = 100;
    let result = (score / maxScore) * 100;
    let letterScore;

    if (result >= 90) {
        letterScore = "A";
    } else if (result >= 80) {
        letterScore = "B";
    } else if (result >= 70) {
        letterScore = "C";
    } else if (result >= 60) {
        letterScore = "D";
    } else { // 0-59
        letterScore = "F";
    }

    return `You got a ${letterScore} (${result}%)!`
}

console.log(getResult(91)); //A
console.log(getResult(88)); //B
console.log(getResult(77)); //C
console.log(getResult(69)); //D
console.log(getResult(10)); //F

