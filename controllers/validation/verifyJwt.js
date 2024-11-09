const  jwt = require("jsonwebtoken")
const verifyJwt = (req, res, next) => {
    const token = req.headers.authorization
    if(token){
        const tokenData = token.split(" ")[1]
        jwt.verify(tokenData, process.env.jwt_secret_key, (err, decoded) => {
            if(err){
                return res.status(400).send({message: "Invalid token"})
            } else {
                req.user = decoded
                next()
            }
        })
    } else {
        return res.status(400).send({message: "Token not found"})
    }
}
module.exports = verifyJwt