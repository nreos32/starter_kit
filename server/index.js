const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipes_router');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/recipeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/recipe', recipeRoutes);

app.get('/', (req, res) => {
  res.send('Recipe API Server');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});