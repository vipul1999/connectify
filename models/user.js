const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path if needed

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobile_no: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password_hash: {
    type: DataTypes.TEXT,
    allowNull:false
  }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;
