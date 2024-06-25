import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://khumeshg1997:1NJsKPZbY1qvKbuA@cluster0.apniavz.mongodb.net/Newdb/Newdb').then(()=>console.log("DataBase Connected"));
    
}