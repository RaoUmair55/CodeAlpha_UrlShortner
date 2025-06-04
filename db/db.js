import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hackthecode404:C32PwILkUVb9hHF1@cluster0.jbfubzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/urlShortener');
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
