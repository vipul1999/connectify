const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with the provided connection details
const sequelize = new Sequelize('connectify', 'project_server_mold_user', '5VoGoAT6VphhOx6PzqH3OzTeO3G6kbER', {
  host: 'dpg-cq1sbdbv2p9s73d7b3jg-a.oregon-postgres.render.com',
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
