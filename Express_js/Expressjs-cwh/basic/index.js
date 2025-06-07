const express = require ('express')
const app = express()
const path = require ('path')
const port = 3000

app.use(express.static(path.join(__dirname, "public")))

app.get('/about/:name',(req,res)=>{
    res.send("hello world "+ req.params.name)  // we do not send the two res. fuction 
    // res.json({ "rahul": "21"})
})

app.listen(port,()=>{
    console.log(`this is a express js app at http://localhost:${port}`)
})