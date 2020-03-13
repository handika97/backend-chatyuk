require("dotenv").config();
const connection = require("../config/db");

module.exports = {
  insertImage: data => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO image SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  image: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM image`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  }
};
