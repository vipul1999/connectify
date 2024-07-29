const { sequelize, testConnection } = require('./config/db'); // Adjust path if necessary

const startApp = async () => {
  try {
    await testConnection(); // Test connection
    // Your app logic here
    console.log('App started successfully.');
  } catch (error) {
    console.error('Error starting the app:', error);
  }
};

startApp();


