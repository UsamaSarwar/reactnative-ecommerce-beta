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

export const signIn = (req, res) => {};

export const updatePassword = (req, res) => {};

export const deleteAccount = (req, res) => {};
