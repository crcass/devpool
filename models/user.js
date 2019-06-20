module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    userId: DataTypes.STRING,
    userName: DataTypes.STRING,
    userCompany: DataTypes.STRING
  });
  return User;
};
