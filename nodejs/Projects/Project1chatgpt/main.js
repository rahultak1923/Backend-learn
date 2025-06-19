const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();

// ✅ Enable CORS
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello gemini")
})

// Replace with your actual API key
const apiKey = process.env.apiKey

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "how to does ai work"
    const genrate = async (prompt)=>{
      try{
          const result = await model.generateContent(prompt);
          const response = await result.response;
          const text = await response.text();
        
          console.log(text);
        return result.response.text()
      }catch(err){
         console.log(err)
      }

  }

// genrate();

app.post('/api/content', async (req,res)=>{
    try{
        const data = req.body.question
        const result = await genrate(data);
        res.send({
            answer:result
        })
    }catch(err){
        console.log(err)
    }
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})