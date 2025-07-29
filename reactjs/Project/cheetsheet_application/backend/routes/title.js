const { Router } = require("express");
const TitleSchema = require ("../models/title");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require('express-validator');

const router = Router()

router.get("/", fetchuser, async(req,res)=>{
    // res.send("hello world")
    const title = await TitleSchema.find({user:req.user.id})
    const Json = {title}
    return res.json(Json)
})
router.post("/add", fetchuser,[
    body('title', "enter a valid title").isLength({ min: 3 }),
    body('description', "description must be atleast 5 characters").isLength({ min: 5 }),

], async (req, res) => {
  
  try {
    const { title, description } = req.body;
    console.log(req.body);
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

    const newTitle = await TitleSchema.create({ title, description, user: req.user.id });
    return res.json({ title: newTitle });
  } catch (error) {
    console.error("Error creating title", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// router.delete("/delete/:id", fetchuser, async(req,res)=>{
//   try{
//     const titleid = req.params.id;
//     const deletedtitle = await TitleSchema.findByIdAndDelete(titleid);
//     return res.status(200).json({message:"the code is deleted", title: deletedtitle})
//   }catch(error){
//     return res.status(500).json({error: "failed to deleted code ", error})
//   }
// })

router.delete("/delete/:id", fetchuser, async (req, res) => {
  try {
    const titleid = req.params.id;
    // const { title, description } = req.body;

    if (!titleid) {
      return res.status(400).json({ error: "Code ID is required" });
    }

    // ✅ Fetch the existing document
    const existingTitle = await TitleSchema.findById(titleid);

    if (!existingTitle) {
      return res.status(404).json({ error: "Code not found" });
    }

    // ✅ Check ownership
    if (existingTitle.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    // ✅ Proceed to update
   const deletedtitle = await TitleSchema.findByIdAndDelete(titleid);
    return res.status(200).json({message:"the code is deleted", title: deletedtitle})

  } catch (error) {
    console.error("Error updating codes:", error);
    return res.status(500).json({ error: "Failed to delete code" });
  }
});
router.put("/update/:id", fetchuser, async (req, res) => {
  try {
    const titleid = req.params.id;
    const { title, description } = req.body;

    if (!titleid) {
      return res.status(400).json({ error: "Code ID is required" });
    }

    // ✅ Fetch the existing document
    const existingTitle = await TitleSchema.findById(titleid);

    if (!existingTitle) {
      return res.status(404).json({ error: "Code not found" });
    }

    // ✅ Check ownership
    if (existingTitle.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    // ✅ Proceed to update
    const updatedTitle = await TitleSchema.findByIdAndUpdate(
      titleid,
      { title, description },
      { new: true }
    );

    return res.status(200).json({ message: "Code updated", title: updatedTitle });

  } catch (error) {
    console.error("Error updating codes:", error);
    return res.status(500).json({ error: "Failed to update code" });
  }
});


module.exports = router
