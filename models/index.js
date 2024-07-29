const path = require('path');
const fs = require('fs');
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes
const sequelize = require('../sequelize'); // Import the Sequelize instance

const db = {};

// Read all model files in the models directory except 'index.js'
fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Attach Sequelize instance to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize; // Use the imported Sequelize class

module.exports = db;
