'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    // id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};