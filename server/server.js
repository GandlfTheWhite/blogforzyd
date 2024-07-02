const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes= require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware

app.use(cors());
app.use(bodyParser.json());

//Database connection
mongoose.connect('mongodb://localhost:27017/myblog',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }   ) 
    .then(()=>console.log('MongoDB connected'))
    .catch(err => console.error(err));

//Route
app.use('/api/auth',authRoutes);
app.use('/api/posts',postRoutes);

app.listen(PORT,()=>console.log('Server running on port ${PORT}'));