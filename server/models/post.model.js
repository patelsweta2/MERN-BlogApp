import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://media.istockphoto.com/id/1299747512/photo/speech-bubble-shaped-pink-neon-light-and-white-exclamation-point-sitting-on-black-wall.jpg?s=2048x2048&w=is&k=20&c=-rHA4IyNUaWE5iOhtm0IxtDJdZbvZDEsCvUI1fbaHR0=",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
