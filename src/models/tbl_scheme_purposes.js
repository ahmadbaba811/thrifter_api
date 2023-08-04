const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_scheme_purposes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    scheme_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    purpose_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    created_date: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "current_timestamp"
    }
  }, {
    sequelize,
    tableName: 'tbl_scheme_purposes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
