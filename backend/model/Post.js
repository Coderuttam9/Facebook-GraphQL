import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("post", postSchema);
