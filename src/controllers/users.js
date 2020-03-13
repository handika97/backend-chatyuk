const usersModel = require("../models/users");
require("dotenv").config();

//const miscHelper = require("../helpers/helper");

var jwt = require("jsonwebtoken");

module.exports = {
  registerUsers: (req, res) => {
    const { name, email, password } = req.body;
    var token = jwt.sign(
      { email: email, password: password },
      process.env.PRIVATE_KEY
    );

    const data = {
      name,
      email,
      password,
      status: 1,
      token: token
    };

    usersModel
      .registerUsers(data)
      .then(result => {
        res.json({
          token: token
        });
      })

      .catch(err => console.log(err));

    console.log(data.firstName);
  },

  updateUsers: (req, res) => {
    const token = req.params.token;
    const { name, email, password } = req.body;
    const data = {
      name,
      email,
      password
    };
    usersModel
      .updateUsers(token, data)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  deleteUsers: (req, res) => {
    const token = req.params.token;
    usersModel
      .deleteUsers(token)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },
  loginUsers: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // console.log('bisa')
    var token = jwt.sign(
      { email: email, password: password },
      process.env.PRIVATE_KEY
    );
    console.log({
      token: token
    });

    console.log(email, password);
    usersModel
      .loginUsers(email, password, token)
      .then(result => {
        // res.json(result);
        if (result.length !== 0) {
          res.json({
            token: token,
            id: result[0].id
          });
        } else {
          res.json({
            token: null
          });
        }
      })
      .catch(err => console.log(err, "yee"));
  },

  logoutUsers: (req, res) => {
    const token = req.params.token;
    usersModel
      .logoutUsers(token)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  },

  checkingToken: (req, res) => {
    const token = req.params.token;
    usersModel
      .checkingToken(token)
      .then(result => {
        console.log(result.length);
        if (result.length === 0) {
          res.json(false);
        } else {
          res.json(true);
        }
      })
      .catch(err => res.json(false));
  },
  getUsers: (req, res) => {
    const email = req.params.email;
    usersModel
      .getUsers(email)
      .then(result => {
        res.json(result);
      })
      .catch(err => res.json(false));
  }
};
