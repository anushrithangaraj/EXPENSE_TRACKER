const express=require('express')
const router=express.Router();
const {getExpenses, createExpenses, deleteExpenses, updateExpense, updateExpenses}=require('../controllers/expenseController')

router.get('/expenses',getExpenses);
router.post('/expenses',createExpenses);
router.delete('/expenses/:id',deleteExpenses);
router.put('/expenses/:id',updateExpenses);

module.exports=router;