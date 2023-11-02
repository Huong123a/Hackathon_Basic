import postsRouter from "./posts.route.js";
import usersRouter from "./users.route.js";

export function route(app) {
  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/posts", postsRouter);
}