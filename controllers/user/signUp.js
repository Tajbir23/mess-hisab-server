const userModel = require("../../models/userSchema")
const generateJwt = require("../validation/generateJwt")
const hashPass = require("./../validation/hashPass")
const signUp = async(req, res) => {
    const {name, phone, password} = req.body
    try {
        const hashedPassword = await hashPass(password)
        const newUser = new userModel({name: name, phone: phone, password: hashedPassword, role: 'user', status: 'pending'})
        await newUser.save()
        const token = await generateJwt(newUser._id, newUser.phone)
        res.status(200).send({message: "User registered successfully", token: token})
    } catch (error) {
        console.error("Error registration", error)
        res.status(500).send({message: "Error registering user"})
    }
}

module.exports = signUp