const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

function generateToken(user) {
  const payload = { id: user._id, email: user.email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });
  return token;
}

async function register(req, res) {
  try {
    const foundUser = await User.findOne({ email: req.body.email });

    if (foundUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const encryptedPassword = await bcrypt.hash(
      req.body.password,
      Number(process.env.SALT_ROUNDS)
    );

    const newUser = await User.create({
      ...req.body,
      password: encryptedPassword,
    });

    const token = generateToken(newUser);

    res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: err.message });
  }
}

async function login(req, res) {
  try {
    const foundUser = await User.findOne({ email: req.body.email });

    if (!foundUser) {
      return res.status(404).json({ error: "No such user exists" });
    }

    const validPass = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );

    if (!validPass) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = generateToken(foundUser);

    res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  register,
  login,
};
