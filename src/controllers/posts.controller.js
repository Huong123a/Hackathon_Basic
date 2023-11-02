import fs from "fs";
import { v4 as uuidv4 } from "uuid";
class PostsController {
   
  getAllPost(req, res) {
    const filePost = fs.readFileSync("./src/models/posts.json", "utf8");
    const listPost = JSON.parse(filePost);

    res.json(listPost);
  }
  //getPostById
  getPostById(req, res) {
    const id = req.params.id;
    const filePost = fs.readFileSync("./src/models/posts.json", "utf8");
    const listPost = JSON.parse(filePost);
    const post = listPost.find((item) => item.id == id);
    res.json(post);
  }
  //createPost
  createPost(req, res) {
    const newPost = req.body;
    req.body.id = uuidv4();
    const filePost = fs.readFileSync("./src/models/posts.json", "utf8");
    const listPost = JSON.parse(filePost);
    listPost.push(newPost);
    fs.writeFileSync("./src/models/posts.json", JSON.stringify(listPost));
    res.json({
      status: 200,
      message: "Ok",
      data: listPost,
    });
  }
  //deletePost
  deletePost(req, res) {
    const id = req.params.id;
    const filePost = fs.readFileSync("./src/models/posts.json", "utf8");
    const listPost = JSON.parse(filePost);
    const newListPost = listPost.filter((item) => item.id != id);
    fs.writeFileSync("./src/models/posts.json", JSON.stringify(newListPost));

    res.json(newListPost);
  }
  //UpdateUser
  updateUser(req, res) {
    const id = req.params.id;
    const fileUsers = fs.readFileSync("./src/models/users.json", "utf8");
    const listUsers = JSON.parse(fileUsers);
    listUsers.forEach((item, index) => {
      if (item.id == id) {
        listUsers.splice(index, 1, req.body);
        return;
      }
    });
    fs.writeFileSync("./src/models/users.json", JSON.stringify(listUsers));
    res.json({
      status: 200,
      message: "Ok",
      data: listUsers,
    });
  }
}
export default PostsController;
