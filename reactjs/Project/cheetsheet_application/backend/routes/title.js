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

module.exports = router
