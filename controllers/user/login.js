const userModel = require("../../models/userSchema")
const generateJwt = require("../validation/generateJwt")
const verifyPass = require("../validation/verifyPass")
const hashPass = require("./../validation/hashPass")
const login = async(req, res) => {
    const {phone, password} = req.body
    console.log("login 7",req.body)
    try {
        
        const user = await userModel.findOne({phone})
        
        console.log("login 12",user)
        if(!user){
            return res.status(400).send({message: "Invalid phone or password"})
        }
        const verify = await verifyPass(password, user.password)

        const token = await generateJwt(user._id, user.phone)

        if(user && verify){
            return res.status(200).send({message: "Login successful", token})
        } else {
            return res.status(400).send({message: "Invalid phone or password"})
        }

    } catch (error) {
        res.send(error)
        console.error(error)
    }
}

module.exports = login