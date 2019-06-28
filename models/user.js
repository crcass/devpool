module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    userId: DataTypes.STRING,
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    website: DataTypes.STRING
  });
  return User;
};
