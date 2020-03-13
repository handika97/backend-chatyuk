require("dotenv");

const connection = require("../config/db");

module.exports = {
  getAllFriends: (id_user, id_friends) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM friend WHERE (id_user=${id_user} && id_friends=${id_friends}) OR (id_user=${id_friends} && id_friends=${id_user})`,
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
  addFriends: (idUser_1, idUser_2) => {
    return new Promise((resolve, reject) => {
      // console.log(idRoom_2, idRoom_1);
      connection.query(
        "Insert Into friend ( id_user, id_friends) values (?,?)",
        [idUser_1, idUser_2],
        (err, result) => {
          if (!err) {
            connection.query(
              "Insert Into friend ( id_user, id_friends) values (?,?)",
              [idUser_2, idUser_1]
            );
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getFriends: id_user => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT users.* FROM friend inner JOIN users on id_friends = users.id WHERE (id_user=${id_user})`,
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

  delFriends: (idUser_1, idUser_2) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM friend WHERE (id_user=${idUser_1} && idUser_2=${idUser_2}) OR (idUser_1=${idUser_2} && idUser_2=${idUser_1})`,
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
