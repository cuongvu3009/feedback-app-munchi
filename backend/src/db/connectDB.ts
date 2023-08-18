import mongoose from "mongoose";

const connectDB = async (dbUri: string) => {
  try {
    await mongoose.connect(dbUri);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
