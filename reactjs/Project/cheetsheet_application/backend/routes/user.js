const { Router } = require('express')
const UserSchema = require('../models/user')
const { body, validationResult } = require('express-validator');
const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken");


const router = Router()

const JWT_SECRET = 'rahulisagoodB$oy'

router.get("/", async (req, res) => {
    const user = await UserSchema.find()
    const Json = { user }
    return res.json(Json)
})

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
        // console.log(jwtData)  // token ko console.log me print kar raha hai 



        // .then(user => res.json(user)).catch(err=> {
        //      res.json({error:'Please enter a unique value for email',message:err.message})});

        
        // const { username, email } = req.body;
        // console.log(req.body);
        // const newUser = await UserSchema.create({ username, email });

        // return res.json({ user: user }) // return kar raha hai user ke data ko
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

module.exports = router