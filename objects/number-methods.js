let makeGuess = function(guess) {
    let min = 1;
    let max = 5;
    let answer = Math.floor(Math.random() * (max - min + 1)) + min;
    return guess === answer;
}
console.log(makeGuess(1));