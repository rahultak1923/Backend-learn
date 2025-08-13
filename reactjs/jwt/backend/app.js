const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const user = require('./routes/user');
const title = require('./routes/title');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8000; 

mongoose.connect('mongodb://localhost:27017/jwt-learning').then(()=> console.log("Connected to MongoDB")).catch(err => console.error("Could not connect to MongoDB", err)); 

app.use("/title",title)
app.use('/user',user)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 