import user from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    let hash = await bcrypt.hash(req.body.password, 10);
    if (req.body.email && req.body.username) {
      await user.create({
        email: req.body.email,
        name: req.body.name,
        password: hash,
        phoneNo: req.body.phone,
        dob: req.body.dob,
        address: req.body.address ? req.body.address : "",
      });
      res
        .status(200)
        .json({ header: { message: "Sign Up successfull" }, body: {} });
    }
  } catch (err) {
    res.status(500).json({
      header: { message: err.message },
      body: {},
    });
  }
};

export const signIn = async (req, res) => {};

export const updatePassword = async (req, res) => {
  // needs to be login earlier
  // check if the the pervious password entered is correct or not
  try {
    let prevPassword = user.password;
    let isPasswordCorrect = await bcrypt.compare(req.password, prevPassword);
    if (isPasswordCorrect) {
      // change the database to new password
      // expecting front end to validate either the password is empty
      user.$where({});
    } else {
      res.status(401).json({
        header: { message: "incorrect password enterd" },
        body: {},
      });
    }
  } catch (err) {
    res.status(418).json({
      header: { message: err.message },
      body: {},
    });
  }
};

export const deleteAccount = async (req, res) => {
  // validate token
  // check is password is correct
  // delete account from database
};
