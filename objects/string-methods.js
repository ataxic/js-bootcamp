

let isValidPassword = function(password) {
    if (password.length >= 8) {
        return true;
    } else if (password.includes("password")) {
        return false;
    } else {
        return false;
    }
}

console.log(isValidPassword("abcd"));
console.log(isValidPassword("abcd#1234j"));
console.log(isValidPassword("abcpassworddef"));
