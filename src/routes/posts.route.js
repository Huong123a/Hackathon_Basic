import express from "express";

import PostsController from "../controllers/posts.controller.js";

const postsRouter = express.Router()
const postsController = new PostsController();
// get All posts
postsRouter.get("/", postsController.getAllPosts);
// get post by id
postsRouter.get("/:id", postsController.getPostsById);
// delete posts
postsRouter.delete("/:id", postsController.deletePost);
// create new post
postsRouter.post("/:userId", postsController.createPost);
// updeta post
postsRouter.put("/:id",postsController.updatePost)


export default postsRouter;