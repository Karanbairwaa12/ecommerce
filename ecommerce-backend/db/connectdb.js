import mongoose from "mongoose";
mongoose.set('strictQuery',false)

const connectdb = async (databaseUrl)=>{
    try{
        const DbOption ={
            dbName:'ecommerce'
        }

        await mongoose.connect(databaseUrl,DbOption)
        console.log("database connected")
    }catch(err){
        console.log(err)
    }
}

export default connectdb