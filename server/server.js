// server.js
const express = require('express');
const bodyParser = require('body-parser');
const problemRoutes = require('./routes/problemRoutes');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 3000;


// Routes
app.use('/api/problems', problemRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the  Algo-X Platform!');
});




// Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
