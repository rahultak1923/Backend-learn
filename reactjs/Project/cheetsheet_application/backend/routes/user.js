const { Router } = require('express')
const UserSchema = require('../models/user')
const { body, validationResult } = require('express-validator');


const router = Router()

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
        UserSchema.create({
            username:req.body.username,
            password: req.body.password,
            email: req.body.email,
        }).then(user => res.json(user)).catch(err=> {
            // console.log(err)
             res.json({error:'Please enter a unique value for email',message:err.message})});

        
        // const { username, email } = req.body;
        // console.log(req.body);
        // const newUser = await UserSchema.create({ username, email });
        // return res.json({ user: newUser })


    } catch (error) {
        console.error("error creating user", error)
        return res.status(500).json({ error: "Internal server error" })
    }
})

module.exports = router