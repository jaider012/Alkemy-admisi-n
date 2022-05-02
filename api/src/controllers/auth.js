const { User } = require("../db");
const { generateToken } = require("../utils/tokenmag");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
    console.error(err.message);
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .send({ error: "Email and/or password must not be empty" });
    }
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).send("User not found");
    } else {
      const correctPassword = await bcrypt.compare(password, user.password);
      if (correctPassword) {
        const token = generateToken(user);
        return res.status(200).send({ token, user: user.username });
      } else {
        return res.status(400).send("Incorrect password");
      }
    }
  } catch (err) {
    console.error(err.message);
  }
};

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .send({ error: "Username, email and/or password must not be empty" });
    }
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const newUser = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });

    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllUsers,
  signIn,
  signUp,
};
