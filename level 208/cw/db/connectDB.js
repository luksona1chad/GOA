import mongoose from "mongoose";

export const connectDB = async() => {
    const MONGODB_URI = process.env.MONGODB_URI;
    console.log("DB is connecting...");

    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log("Mongodb is connected!", conn.connection.host);
    } catch (err) {
        console.error("Mongodb is not connected!", err);
    }
};