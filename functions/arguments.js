
let tipPercent = function(total, percentage = .2) {
    return total * (percentage);
}
let total = 100;
let perc = .2;
let friendlyPerc = 100 * perc;
let tip = tipPercent(total, perc);
let grandTotal = total + tip;
let message= `The drinks cost me $${total} and I tipped ${friendlyPerc}% ($${tip},-) totalling $${grandTotal},-`

console.log(message);