import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log(`MongoDB connected Successfully`);
        });

        mongoose.connection.on("error", (err) => {
            console.log("Error in connecting to database", err);
        });
        await mongoose.connect(config.databaseURL as string);
    } catch (err) {
        console.error(`Failed to connect the Database: ${err}`);
        process.exit(1);
    }
};

export default connectDB;
