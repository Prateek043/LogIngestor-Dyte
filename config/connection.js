const mongoose=require('mongoose');

const Connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Successfull connected to Database");
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports=Connect;