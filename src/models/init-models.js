var DataTypes = require("sequelize").DataTypes;
var _tbl_ratings = require("./tbl_ratings");
var _tbl_scheme = require("./tbl_scheme");
var _tbl_scheme_admins = require("./tbl_scheme_admins");
var _tbl_scheme_contributions = require("./tbl_scheme_contributions");
var _tbl_scheme_expenses = require("./tbl_scheme_expenses");
var _tbl_scheme_purposes = require("./tbl_scheme_purposes");
var _tbl_scheme_registrations = require("./tbl_scheme_registrations");
var _tbl_users = require("./tbl_users");
var _tbl_wallet_history = require("./tbl_wallet_history");

function initModels(sequelize) {
  var tbl_ratings = _tbl_ratings(sequelize, DataTypes);
  var tbl_scheme = _tbl_scheme(sequelize, DataTypes);
  var tbl_scheme_admins = _tbl_scheme_admins(sequelize, DataTypes);
  var tbl_scheme_contributions = _tbl_scheme_contributions(sequelize, DataTypes);
  var tbl_scheme_expenses = _tbl_scheme_expenses(sequelize, DataTypes);
  var tbl_scheme_purposes = _tbl_scheme_purposes(sequelize, DataTypes);
  var tbl_scheme_registrations = _tbl_scheme_registrations(sequelize, DataTypes);
  var tbl_users = _tbl_users(sequelize, DataTypes);
  var tbl_wallet_history = _tbl_wallet_history(sequelize, DataTypes);


  return {
    tbl_ratings,
    tbl_scheme,
    tbl_scheme_admins,
    tbl_scheme_contributions,
    tbl_scheme_expenses,
    tbl_scheme_purposes,
    tbl_scheme_registrations,
    tbl_users,
    tbl_wallet_history,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
