import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        .then((d)=>{
            console.log("DataBase Connected");
        })
        .catch((e)=>{
            console.log("Database error",e)
        })
    } catch (error) {
        console.log("DataBase Error",error);
    }
}

export default connectDB;
// exports.connectDB=connectDB;
