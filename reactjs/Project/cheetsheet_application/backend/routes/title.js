const { Router } = require("express");
const TitleSchema = require ("../models/title");

const router = Router()

router.get("/", async(req,res)=>{
    // res.send("hello world")
    const title = await TitleSchema.find()
    const Json = {title}
    return res.json(Json)
})
router.post("/add", async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(req.body);
    const newTitle = await TitleSchema.create({ title, description });
    return res.json({ title: newTitle });
  } catch (error) {
    console.error("Error creating title", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/delete/:id", async(req,res)=>{
  try{
    const titleid = req.params.id;
    const deletedtitle = await TitleSchema.findByIdAndDelete(titleid);
    return res.status(200).json({message:"the code is deleted", title: deletedtitle})
  }catch(error){
    return res.status(500).json({error: "failed to deleted code ", error})
  }
})

router.put("/update/:id", async(req,res)=>{
  try{

    const titleid = req.params.id;
    const {title, description} = req.body;
 
    if(!titleid){
      return res.status(400).json({error: "Code ID is required"})
    }

    const updatetitle = await TitleSchema.findByIdAndUpdate(titleid,{title, description},{new:true});

    if(!updatetitle){
      return res.status(404).json({error:"Code is not found"})
    }

    return res.status(200).json({message:"code updated",title:updatetitle})
  }catch(error){
    console.log("error updating codes",error);
    return res.status(500).json({error: "failed to update jewellery"})
}
})

module.exports = router
