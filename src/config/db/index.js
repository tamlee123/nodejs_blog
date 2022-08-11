import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog_dev", {
      useNewUrlParser: true,
      useUnifiedToPology: true,
    });
    console.log("Connect to MongoDB Successfully!!");
  } catch (error) {
    console.log("Connect Failure!!");
  }
}
export default { connect };
