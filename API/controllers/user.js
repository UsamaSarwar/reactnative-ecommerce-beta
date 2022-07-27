import user from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment from "moment";

export const signUp = async (req, res) => {
  try {
    // check if email already exists in database
    const result = await user.findOne({ email: req.body.email });
    if (result) {
      throw {
        title: "Account already exists",
        message: "Please login instead",
      };
    }

    // hash password
    let hash = await bcrypt.hash(req.body.password, 10);

    // if all fields are filled
    if (req.body.email && req.body.name) {
      // create acoount
      await user.create({
        email: req.body.email,
        name: req.body.name,
        password: hash,
        phone: req.body.phone,
        dob: moment(req.body.dob),
        address: req.body.address ? req.body.address : "",
        admin: false,
      });
      res.status(200).json({
        header: { message: "Sign Up successfull" },
        body: {},
      });
    } else {
      throw {
        title: "Failed to sign up",
        message: "There are missing values.",
      };
    }
  } catch (err) {
    res.status(500).json({
      header: { title: "Sign up failed", message: err.message },
      body: {},
    });
  }
};

export const signIn = async (req, res) => {
  try {
    // validate if email exists
    const result = await user.findOne({ email: req.body.email });
    if (result) {
      // check if password is correct
      bcrypt.compare(req.body.password, result.password, (err, success) => {
        if (err) {
          throw err;
        }
        if (success) {
          // create token
          const token = jwt.sign(
            {
              id: result._id,
              email: req.body.email,
            },
            process.env.JWT_SECRET
          );
          console.log(result.admin);
          res.status(200).json({
            header: { message: "success" },
            body: {
              token: token,
              type: result.admin ? "admin" : "user",
            },
          });
        } else {
          res.status(401).json({
            header: {
              title: "Login Failed",
              message: "Invalid Credentials, Please try again",
            },
            body: {},
          });
        }
      });
    } else {
      res.status(401).json({
        header: {
          title: "Failed to login",
          message: "Invalid Credentials, Please try again",
        },
        body: {},
      });
    }
  } catch (err) {
    res.status(500).json({
      header: { title: "Login Failed", message: err.message },
      body: {},
    });
  }
};

export const updatePassword = async (req, res) => {
  try {
    // if token doesn't exists
    if (!req.body.token) {
      res.status(500).json({
        header: { message: "Token not found" },
        body: {},
      });
    } else {
      // get information from token
      let data = await jwt.decode(req.body.token, process.env.JWT_SECRET);

      // get previous (hased)password

      let currUser = await user.findById(data.id);

      // check if the the pervious password entered is correct or not
      let dbPassword = currUser.password;

      bcrypt.compare(
        req.body.prevPassword,
        dbPassword,
        async (err, isMatch) => {
          if (err) {
            return res.status(500).json({
              header: {
                title: "Failed to change password",
                message: err.message,
              },
              body: {},
            });
          }

          if (!isMatch) {
            return res.status(401).json({
              header: {
                title: "Failed to change password",
                message: "Invalid Credentials",
              },
              body: {},
            });
          }

          // hash new password
          let hash = await bcrypt.hash(req.body.newPassword, 10);

          // change the database to new password
          // expecting front end to perform validation

          await user.updateOne(
            {
              _id: data.id,
            },
            {
              $set: {
                password: hash,
              },
            }
          );

          // password changed
          res.status(200).json({
            header: { message: "Password changed successfully" },
            body: {},
          });
        }
      );
    }
  } catch (err) {
    res.status(500).json({
      header: { title: "Failed to change password", message: err.message },
      body: {},
    });
  }
};

export const deleteAccount = async (req, res) => {
  // validate token
  try {
    // if token doesn't exists
    if (!req.body.token) {
      res.status(500).json({
        header: { message: "Token not found" },
        body: {},
      });
    } else {
      // get data from token
      let data = await jwt.decode(req.body.token, process.env.JWT_SECRET);

      // check if password is correct
      let currUser = await user.findById(data.id);

      // check if the the pervious password entered is correct or not
      let dbPassword = currUser.password;

      // console.log(dbPassword);

      bcrypt.compare(req.body.password, dbPassword, async (err, isMatch) => {
        // error while comparing
        if (err) {
          return res.status(500).json({
            header: {
              title: "Failed to delete Account",
              message: err.message,
            },
            body: {},
          });
        }

        // if password is incorrect
        if (!isMatch) {
          return res.status(401).json({
            header: {
              title: "Failed to delete Account",
              message: "Please enter correct password",
            },
            body: {},
          });
        }

        // delete account from database //

        let data = await jwt.decode(req.body.token, process.env.JWT_SECRET);

        await user.deleteOne({ _id: data.id });

        res.status(200).json({
          header: { message: "Account deleted successfully" },
          body: {},
        });
      });
    }
  } catch (err) {
    res.status(500).json({
      header: { title: "Failed to delete Account", message: err.message },
      body: {},
    });
  }
};
