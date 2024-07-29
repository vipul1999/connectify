const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path to your database configuration

const PostTag = sequelize.define('post_tag', {
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'posts',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tags',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
});

module.exports = PostTag;
