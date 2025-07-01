const express = require('express')
const mongoose = require('mongoose');
const title = require('./routes/title');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/code-mint').then(()=> console.log("MongoDB Connected")).catch((err)=> console.error("MongoDB Connected",err))

app.use("/title",title)

app.listen(PORT,()=>console.log(`Server started at PORT : ${PORT}`))
