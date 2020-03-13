require("dotenv");

const connection = require("../config/db");

module.exports = {
  registerUsers: data => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO users SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  updateUsers: (token, data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET ? WHERE token = ?",
        [data, token],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  deleteUsers: token => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM users WHERE token=?",
        token,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  loginUsers: (email, password, token) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE email=? AND password = ?",
        [email, password],
        (err, result) => {
          if (!err) {
            console.log("yee", token);
            connection.query(
              `UPDATE users set status='1', token='${token}'  where email='${email}'`
            );
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },

  logoutUsers: token => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE users SET token = 0 WHERE token = ?",
        [token],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  checkingToken: token => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT token FROM users WHERE token = ?",
        [token],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getUsers: email => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};
