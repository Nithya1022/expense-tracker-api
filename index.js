const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const Expense = require('./models/expenses')
mongoose.connect("mongodb+srv://nithya:nith1010@cluster0.ryb7lyx.mongodb.net/expense-tracker?retryWrites=true&w=majority",{
    useUnifiedTopology: true
})
app.use(express.json())
app.get('/expenses', async (req, res) => {
    const expenses = await Expense.find();
    res.send(expenses);
})
app.get('/expenses/:id',async (req,res)=>{
   try{ const id = req.params.id;
    const result =await Expense.findById(id)
    if(result)
    {
        res.send(result)
    }
    else{
        res.send("No Expense with that id");
    }
}
catch(err){
    res.send(err)
}
})
app.delete('/expenses/:id',async (req,res)=>{
     const id = req.params.id;
     const result =await Expense.findByIdAndDelete(id)
     if(result)
     {
         res.send("Data deleted")
     }
     else{
         res.send("No Expense with that id");
     }
})
app.post('/expenses',async (req,res)=>{
    
    const newExpense = req.body
    const result =await Expense.create(newExpense)
    if(result)
    {
        res.send("Data added")
    }
    else{
        res.send("No data added");
    }
})
app.put('/expenses/:id',async (req,res)=>{
    const id = req.params.id;
    const newExpense = req.body
    const result =await Expense.findByIdAndUpdate(id,newExpense,{new:true})
    if(result)
    {
        res.send("Data updated")
    }
    else{
        res.send("No Expense with that id");
    }
})

app.post('/expenses', (req, res) => {
    res.send("Data Added");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})