const Expense=require('../models/expense');

const getExpenses=async (req,res)=>{
    try{
        const  expenses=await Expense.find();
        res.json(expenses);
    }
    catch(error){
        res.status(500).json({message:'server error'});
    }
}
const createExpenses=async(req,res)=>{
    const{title,amount}=req.body;
    try{
        const newExpense=new Expense({title,amount})
        await newExpense.save();
        res.status(201).json(newExpense)
    }catch(error){
        res.status(500).json({message:'server error'});
    }
}
const deleteExpenses=async(req,res)=>{
    const {id}=req.params;
    try{
        await Expense.findByIdAndDelete(id);
        res.json({message:'deleted successfully'})

    }catch(error){
        res.status(500).json({message:'Error deleting expenses'})

    }
}
const updateExpenses = async(req,res)=>{
    const {id}=req.params;
    const{title,amount}=req.body;
    try {
       const update=await Expense.findByIdAndUpdate(
        id,
        {title,amount},
        {new:true}
       )
       res.json(update);
    } catch (error) {
        res.status(500).json({message:'Error updating expenses'})
    }
}
module.exports={getExpenses,createExpenses,deleteExpenses,updateExpenses}