import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

mongoose.plugin(slug);
const Course = new mongoose.Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String, maxLength: 255, required: true },
    level: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", Course);
