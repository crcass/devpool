module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comments', {
    author: DataTypes.STRING,
    comment: DataTypes.STRING,
    user: DataTypes.STRING
  });
  return Comment;
};
