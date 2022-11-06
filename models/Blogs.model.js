const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 3 },
    body: { type: String, required: true, trim: true },
    author: {
      type: String,
      required: true,
    },
    date: { type: Date, required: true },
    comments: [String],
  },
  { timestamps: true }
);

const BlogModel = mongoose.model("blog", blogsSchema);

module.exports = { BlogModel };
