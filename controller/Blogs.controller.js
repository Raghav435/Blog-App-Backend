const { BlogModel } = require("../models/Blogs.model");

const getBlogs = async (req, res) => {
  const blogs_data = await BlogModel.find();
  res.status(200).send(blogs_data);
};
const getBlogsById = async (req, res) => {
  const blogs_data = await BlogModel.find({ _id: req.params.id });
  res.json(blogs_data);
};

const addBlog = async (req, res) => {
  const { title, body, author } = req.body;
  const date = Date.parse(req.body.date);

  const comments = [];

  //Create a new Post and save it to DB
  const newPost = new BlogModel({
    title,
    body,
    author,
    date,
    comments,
  });

  // Save the new post
  newPost.save();

  res.status(200).json("Blog Added!");
};

const editBlog = async (req, res) => {
  const blog = await BlogModel.findById({ _id: req.params.id });
  if (!blog) {
    res.status(400);
    res.send("blog not found");
  }
  const update_blogs = await BlogModel.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    req.body
  );
  // update_blogs.save();
  res.status(200).json("Blog Edited");
};

const deleteBlog = async (req, res) => {
  const blog = await BlogModel.findByIdAndRemove({
    _id: req.params.id,
  });
  res.status(200).json("blog Deleted");
};

module.exports = { getBlogs, getBlogsById, addBlog, editBlog, deleteBlog };
