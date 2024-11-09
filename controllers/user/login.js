const userModel = require("../../models/userSchema")
const generateJwt = require("../validation/generateJwt")
const hashPass = require("./../validation/hashPass")
const login = async(req, res) => {
    const {phone, password} = req.body
    try {
        const hashedPassword = await hashPass(password)
        const user = await userModel.findOne({phone, password: hashedPassword}).select('-password')
        const token = await generateJwt(user._id, user.phone)

        if(user){
            return res.status(200).send({message: "Login successful", user, token})
        } else {
            return res.status(400).send({message: "Invalid phone or password"})
        }

    } catch (error) {
        res.send(error)
        console.error(error)
    }
}

module.exports = login