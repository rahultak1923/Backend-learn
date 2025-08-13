const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const UserSchema = require ('../models/user')
const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require('../middleware/fetchuser');



const router = Router();

const JWT_SECRET = 'rahulisagoodB$oy'

router.get('/', async (req, res) => {
    try {
        const user = await UserSchema.find();
        const Json = {user};
        return res.json(Json).status(200).json({ message: "User fetched successfully" });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/add", [
    body('username', "enter a valid username").isLength({ min: 3 }),
    body('password', "password must be atleast 3 characters").isLength({ min: 3 }),
    body('email', "enter a valid email").isEmail(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        let user = await UserSchema.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error:'sorry a user with this email already exists'})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await UserSchema.create({
            username:req.body.username,
            password: secPass,
            email: req.body.email,
        })
        const data ={
            user:{
                id:user.id
            }
        }
        
        const authtoken = jwt.sign(data, JWT_SECRET)
       
        return res.json({ authtoken })


    } catch (error) {
        console.error("error creating user", error)
        return res.status(500).json({ error: "Internal server error" })
    }
})

router.post("/login", [
    body('password', "password cannot be blank").exists(),
    body('email', "enter a valid email").isEmail(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const {email, password}= req.body;
        try {
            let user = await UserSchema.findOne({email});
            if(!user){
               return res.status(400).json({error:"please try to login with correct credentials"}) 
            }
            const passwordCompare = await bcrypt.compare(password, user.password);
            if(!passwordCompare){
               return res.status(400).json({error:"please try to login with correct credentials password is wrong"})  
            }
            const data = {
                user:{
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.json({authtoken})
        }  catch (error) {
        console.error("error creating user", error)
        return res.status(500).json({ error: "Internal server error" })
    }
      


    } catch (error) {
        console.error("error creating user", error)
        return res.status(500).json({ error: "Internal server error" })
    }
})

// route 3 : Get loggedin User Details using : POST . login required

router.post('/getuser',fetchuser, async(req,res)=>{
    try{
        userId = req.user.id;
        const user = await UserSchema.findById(userId).select("-password")
res.send(user)
    }catch (error) {
        console.error("error creating user", error)
        return res.status(500).json({ error: "Internal server error" })
    }
})

module.exports = router