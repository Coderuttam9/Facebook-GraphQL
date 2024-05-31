import mongoose from "mongoose";

const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connection Successfull");
  } catch (error) {
    console.log(`${error.message}`);
  }
};

export default DBconnection;
