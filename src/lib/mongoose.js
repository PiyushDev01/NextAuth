import mongoose from "mongoose";

export const connnectMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to mongodb")
    }catch(e){
        console.log("err while connecting to database", e);
    }
}