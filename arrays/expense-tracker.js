const account = {
    name: "Joffrey Verkade",
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });        
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function(){
        let totalExpenses = 0;

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount;
        })
       
        let totalIncome = 0

        this.income.forEach(function(pay) {
            totalIncome = totalIncome + pay.amount;
        })

        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }
}

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// JV has a balance of $10. $100 in income. $90 in expense.
account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Salary", 1000);
console.log(account.getAccountSummary());

