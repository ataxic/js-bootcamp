let myAccount = {
    name: "Joffrey Verkade",
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
}

//addIncome
let addIncome = function(account, amount) {
    account.income = account.income + amount;
    console.log("Added income!");
}

//resetAccount
let resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;
}

//getAccountSummary
let getAccountSummary = function(account) {
    console.log(`Account for ${account.name} has $${account.income - account.expenses}. $${account.income} income. $${account.expenses} in expenses.`)
    // return {
    //     name: account.name,
    //     expenses: account.expenses,
    //     income: account.income
    // }
}

//Account for Joffrey has $900. $1000 income. $100 in expenses.

//addIncome
addIncome(myAccount,500.00);
//addExpense
addExpense(myAccount,5.00);
//addExpense
addExpense(myAccount,10.00);
//getAccountSummary
getAccountSummary(myAccount);
//resetAccount
resetAccount(myAccount);
//getAccountSummary
getAccountSummary(myAccount);
