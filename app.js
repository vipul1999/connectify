const express = require('express');
const sequelize = require('./config/db'); // Ensure this path is correct
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes')


const app = express();

app.use(express.json());
// Middleware to parse JSON
app.use('/api', userRoutes); // Prefix your routes with /api
app.use('/api', postRoutes);
// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sync models and start server
sequelize.sync().then(() => {
console.log('Database synced');
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}).catch(error => {
  console.error('Error syncing database:', error);
});
