const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path if needed
const Tag = require('./tag'); // Import the Tag model

const Post = sequelize.define('Post', {
text: {
    type: DataTypes.TEXT,
    allowNull: true,
},
photo_url: {
    type: DataTypes.STRING,
    allowNull: true,
},
created_on: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
},
user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
}
},{
tableName: 'posts',
timestamps: false
});

// Post.belongsToMany(Tag, {
//     through: 'PostTag', // Junction table
//     foreignKey: 'post_id',
//   });
  

module.exports = Post;