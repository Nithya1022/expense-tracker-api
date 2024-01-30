const mongoose = require('mongoose');
const expenseScheme =  new mongoose.Schema({
    text:String,
    amount:Number,
    desc:String
});

const Expense = mongoose.model('Expense', expenseScheme);
module.exports = Expense