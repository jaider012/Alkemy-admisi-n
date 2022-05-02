const { Router } = require("express");

const { getAllUsers, signIn, signUp } = require("../controllers/auth");

const authRouter = Router();

authRouter.get("/", getAllUsers);
authRouter.post("/signin", signIn);
authRouter.post("/signup", signUp);

module.exports = authRouter;
