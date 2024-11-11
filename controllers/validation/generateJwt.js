require('dotenv').config()
const jwt = require("jsonwebtoken")
const generateJwt = (id, phone, role) => {
    const token = jwt.sign({id, phone, role}, process.env.jwt_secret_key, {expiresIn: '7d'})
    return token
}

module.exports = generateJwt