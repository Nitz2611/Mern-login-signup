import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database ${process.env.PORT}`);
    } catch (error) {
        console.log(`Error in Mongdb ${error}`);
    }
};

export default connectDB