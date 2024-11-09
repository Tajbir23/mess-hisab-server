require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

app.use((req, res) => {
    res.json({ message: "Welcome to the REST API!" })
})

app.listen(port,() => {
    console.log(`Server running on port http://localhost:${port}`)
})