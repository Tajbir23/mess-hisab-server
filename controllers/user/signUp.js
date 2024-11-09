const userModel = require("../../models/userSchema")
const generateJwt = require("../validation/generateJwt")
const hashPass = require("./../validation/hashPass")
const signUp = async(req, res) => {
    const {name, phone, password} = req.body
    console.log(req.body)
    try {
        const hashedPassword = await hashPass(password)
        const newUser = new userModel({name: name, phone: phone, password: hashedPassword, role: 'user', status: 'pending'})
        await newUser.save()
        const token = await generateJwt(newUser._id, newUser.phone)
        res.status(200).send({message: "User registered successfully", token: token})
    } catch (error) {
        console.error("Error registration", error)
        if(error.code === 11000){
            return res.status(400).send({message: "User already exists"})
        }
        res.status(500).send({message: error.message})
    }
}

module.exports = signUp