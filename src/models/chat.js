require("dotenv");

const connection = require("../config/db");

module.exports = {
  getAllChat: (idUser_1, idUser_2) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM roomchat WHERE (idUser_1=${idUser_1} && idUser_2=${idUser_2}) OR (idUser_1=${idUser_2} && idUser_2=${idUser_1})`,
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
  addChat: (idUser_1, idUser_2) => {
    return new Promise((resolve, reject) => {
      // console.log(idRoom_2, idRoom_1);
      connection.query(
        "Insert Into roomChat ( idUser_1, idUser_2) values (?,?)",
        [idUser_1, idUser_2],
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

  delChat: (idUser_1, idUser_2) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM roomchat WHERE (idUser_1=${idUser_1} && idUser_2=${idUser_2}) OR (idUser_1=${idUser_2} && idUser_2=${idUser_1})`,
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
