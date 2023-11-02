import express from "express";
import UsersController from "../controllers/users.controller.js";

const usersRouter = express.Router();
const usersController = new UsersController();
// get all users
usersRouter.get("/", usersController.getAllUsers);
// get user by id
usersRouter.get("/:id", usersController.getUsersById);
// create user
usersRouter.post("/", usersController.createUser);
// delete user
usersRouter.delete("/:id", usersController.deleteUser);
// update user
usersRouter.put("/:id", usersController.updateUser);


export default usersRouter;
