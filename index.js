require("dotenv").config()
const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/user/userHandler")
const app = express()
const port = process.env.PORT || 3000
const dbConnection = require("./config/db")

app.use(cors({
    origin: ["http://localhost:5173", "https://mess-hisab-salek-pump.web.app"]
}))

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

dbConnection()

app.use("/api/user", userRouter)

app.listen(port,() => {
    console.log(`Server running on port http://localhost:${port}`)
})