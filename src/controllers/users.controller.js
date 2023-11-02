import fs from "fs";
import { v4 as uuidv4 } from "uuid";
class UsersController {
  getAllUsers(req, res) {
    const fileUsers = fs.readFileSync("./src/models/users.json", "utf8");
    const listUsers = JSON.parse(fileUsers);

    res.json(listUsers);
  }
  getUsersById(req, res) {
    const id = req.params.id;
    const fileUsers = fs.readFileSync("./src/models/users.json", "utf8");
    const listUsers = JSON.parse(fileUsers);
    const user = listUsers.find((item) => item.id == id);
    res.json(user);
  }
  createUser(req, res) {
    const newUser = req.body;
    req.body.id = uuidv4();
    const fileUsers = fs.readFileSync("./src/models/users.json", "utf8");
    const listUsers = JSON.parse(fileUsers);
    listUsers.push(newUser);
    fs.writeFileSync("./src/models/users.json", JSON.stringify(listUsers));
    res.json({
      status: 200,
      message: "Ok",
      data: listUsers,
    });
  }
  deleteUser(req, res) {
    const id = req.params.id;
    const fileUsers = fs.readFileSync("./src/models/users.json", "utf8");
    const listUsers = JSON.parse(fileUsers);
    const newListUser = listUsers.filter((item) => item.id != id);
    fs.writeFileSync("./src/models/users.json", JSON.stringify(newListUser));

    res.json(newListUser);
  }
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
export default UsersController;
