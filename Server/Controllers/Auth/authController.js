const User = require("../../Models/Auth/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const sendEmail = require("../../Utils/SendEmail");

//register user
exports.saveUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user !== null) {
      return res.status(400).json({ message: "email already exists" });
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const createdUser = await User.create({
      email: req.body.email,
      password: hashPassword,
    });

    const token = jwt.sign(
      { id: createdUser._id, role: createdUser.role, email: createdUser.email },
      "mesaf",
      {
        expiresIn: "2 days",
      }
    );

    res.status(200).send({ message: "created", token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    // console.log("hi"); 
    const token = req.params.token;
    let id;
    jwt.verify(token, "mesaf", function (err, decoded) {
      if (err) {
        return res.status(401).json({ message: "error" });
      }
      id = decoded.id;
    });
    const user = await User.findById(id);
    res.status(200).json({ user: user });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

//LOGIN USER

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(404).send({ message: "User does not exsist" });
    }

    const compare = await bcrypt.compare(req.body.password, user.password);
    if (compare === false) {
      return res.status(404).send({ message: "Wrong Email or Password" });
    }
    user.password = undefined;

    const token = jwt.sign(
      { id: user._id, role: user.role, email: user.email },
      "mesaf",
      {
        expiresIn: "2 days",
      }
    );

    res.status(200).send({ message: "Logged in", user, token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

// forgot password

exports.forgetPassword = async (req, res) => {
  //check if email exist
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send("user with given email doesn't exist");
    console.log(user);

    //token
    const token = jwt.sign({ id: user._id }, "mesaf", {
      expiresIn: "15 min",
    });

    //send email

    const link = `${process.env.BASE_URL}/forgotPassword/${token}`;

    await sendEmail(user.email, "Password reset", link);

    return res.status(200).send({ message: "forgot password", token });
  } catch (error) {
    console.log(error.message);
  }
};

//Reset Password

exports.RestPassword = async (req, res) => {
  try {
    //verify token
    const user = await User.findById(req.params.token);
    if (!user) return res.status(400).send("invalid link or expired");

    const token = await token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");
    //change password
    user.password = req.body.password;
    await user.save();
    await token.delete();

    res.send("password reset sucessfully.");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
};