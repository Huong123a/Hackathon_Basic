import fs from "fs";
import { v4 as uuidv4 } from "uuid";

class PostsController {
  getAllPosts(req, res) {
    const filePosts = fs.readFileSync("./src/models/posts.json", "utf8");
    const listPosts = JSON.parse(filePosts);
    res.json(listPosts);
  }
  getPostsById(req, res) {
    const id = req.params.id;
    const filePosts = fs.readFileSync("./src/models/posts.json", "utf8");
    const listPosts = JSON.parse(filePosts);
    const post = listPosts.find((item) => item.id == id);
    res.json(post);
  }
  deletePost(req, res) {
    const id = req.params.id;
    const filePosts = fs.readFileSync("./src/models/posts.json", "utf8");
    const listPosts = JSON.parse(filePosts);
    const newListPost = listPosts.filter((item) => item.id != id);
    fs.writeFileSync("./src/models/posts.json", JSON.stringify(newListPost));

    res.json(newListPost);
  }
  createPost(req, res) {
    const userId = req.params.userId;
    const newPost = req.body;
    req.body.id = uuidv4();
    req.body.userId = userId;
    const filePosts = fs.readFileSync("./src/models/posts.json", "utf8");
    const listPosts = JSON.parse(filePosts);
    listPosts.push(newPost);
    fs.writeFileSync("./src/models/posts.json", JSON.stringify(listPosts));
    res.json(listPosts);
  }
  updatePost(req, res) {
    const id = req.params.id;
    const filePosts = fs.readFileSync("./src/models/posts.json", "utf8");
    const listPosts = JSON.parse(filePosts);
    listPosts.forEach((item, index) => {
      if (item.id == id) {
        newPost = { ...item, ...req.body };
        listPosts.splice(index, 1, newPost);
        return;
      }
    });
    fs.writeFileSync("./src/models/posts.json", JSON.stringify(listPosts));
    res.json({
      status: 200,
      message: "Ok",
      data: listPosts,
    });
  }
 
}
export default PostsController;