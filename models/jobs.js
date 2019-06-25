module.exports = (sequelize, DataTypes) => {
  const Jobs = sequelize.define('Jobs', {
    author: DataTypes.STRING,
    company: DataTypes.STRING,
    website: DataTypes.STRING,
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING
  });
  return Jobs;
};
