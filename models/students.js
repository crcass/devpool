module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Students', {
    name: DataTypes.STRING,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    portfolio: DataTypes.STRING
  });
  return Student;
};
