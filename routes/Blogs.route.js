const express = require("express");
const {
  getBlogsById,
  getBlogs,
  editBlog,
  addBlog,
  deleteBlog,
} = require("../controller/Blogs.controller");
const { authentication } = require("../middlewares/authentication");

const blogRouter = express.Router();

blogRouter.get("/", authentication, getBlogs);

blogRouter.get("/:id", authentication, getBlogsById);

blogRouter.post("/create", authentication, addBlog);

blogRouter.put("/:id", authentication, editBlog);

blogRouter.delete("/:id", authentication, deleteBlog);

module.exports = blogRouter;
