const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
const articleRoutes = require('./src/routes/articleRoutes');
const followRoutes = require('./src/routes/followRoutes');
const feedRoutes = require('./src/routes/feedRoutes');
const tagRoutes = require('./src/routes/tagRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/follow', followRoutes);
app.use('/api/feed', feedRoutes);
app.use('/api/tags', tagRoutes);

// Connecting to DB , you will find the URI in the .env file
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));