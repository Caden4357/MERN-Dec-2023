const User = require('../models/user.model')
const bcrypt = require('bcrypt')

module.exports = {
    registerUser: async (req, res) => {
        try{
            // Check if the user already exists 
            const potentialUser = await User.findOne({email:req.body.email})
            if(potentialUser){
                res.status(400).json({message:'This email already exists please log in'})
            }
            else{
                const newUser = await User.create(req.body)
                // ! Generate a json web token and add it into to res object to send to the client with all the other stuff
                res.status(201).json(newUser)
            }
        }
        catch(err) {
            res.status(500).json({error: err})
        }

}}