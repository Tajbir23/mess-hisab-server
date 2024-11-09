require('dotenv').config()
const jwt = require("jsonwebtoken")
const generateJwt = (id, phone) => {
    const token = jwt.sign({id, phone}, process.env.jwt_secret_key, {expiresIn: '7d'})
    return token
}

module.exports = generateJwt