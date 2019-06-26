module.exports = (sequelize, DataTypes) => {
  const SavedJobs = sequelize.define('SavedJobs', {
    jobId: DataTypes.INTEGER,
    user: DataTypes.STRING,
    author: DataTypes.STRING,
    company: DataTypes.STRING,
    website: DataTypes.STRING,
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING
  });
  return SavedJobs;
};
