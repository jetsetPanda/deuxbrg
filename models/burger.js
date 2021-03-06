module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false, //jS: must contain.. min 2 in string.length
        validate: { //jS: validating that string exists by 2 char, prolly redundant
          len: [1]
        }
      },
      devoured: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 0
      }
    });
    return Burger;
};
  
// >>>>>> JETSET: OLD ORM MODEL BELOW
// var orm = require("../config/orm.js");

// var burger = {
//     selectAll: function(cb) {
//         orm.selectAll("burger", function(res) {
//             cb(res);
//         });
//     },
//     insertOne: function(cols, vals, cb) {
//         orm.insertOne("burger", cols, vals,
//         function(res) {
//             cb(res);
//         });
//     },
//     updateOne: function(objColVals, condition, cb) {
//         orm.updateOne("burger", objColVals, condition, function(res) {
//             cb(res);
//         });
//     }
// };

// module.exports = burger;