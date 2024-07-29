const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path to your database configuration
const Post = require('./post'); // Import the Post model
const PostTag = require('./postTag'); // Ensure correct path

const Tag = sequelize.define('Tags', {
  tag_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});
module.exports = Tag;
