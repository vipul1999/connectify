require('dotenv').config();
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with the provided connection details
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,  // Ensure SSL is used
      rejectUnauthorized: false // Adjust based on your security requirements
    }
  },
  logging: (msg) => console.log(`Sequelize Log: ${msg}`), // Enable SQL logging for debugging
});

// Authenticate the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;
