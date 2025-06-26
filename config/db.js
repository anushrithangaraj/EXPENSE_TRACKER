const mongoose=require('mongoose');
const mongoURL='mongodb+srv://tanushriraj2005:rukiPAuzGYNg3FJz@cluster0.my4rwoj.mongodb.net/'
const connectDB=async()=>{
    try{
        await mongoose.connect(mongoURL)
        console.log("mongoDB connected")
    }
    catch(err){
        console.log("Error in mongodb",err.message);
        process.exit(1);
    }
}
module.exports=connectDB; 
// mongodb+srv://tanushriraj2005:rukiPAuzGYNg3FJz@cluster0.my4rwoj.mongodb.net/