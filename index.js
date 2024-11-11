require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cron = require("node-cron")
const userRouter = require("./routes/user/userHandler")
const app = express()
const port = process.env.PORT || 3000
const dbConnection = require("./config/db")
const mealRouter = require("./routes/meal/mealHandler")
const resetDailyMeal = require("./controllers/cronjob/resetDailyMeal")

app.use(cors({
    origin: ["http://localhost:5173", "https://mess-hisab-salek-pump.web.app", "https://mess-hisab-server.vercel.app"]
}));


app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

dbConnection()

app.use("/api/user", userRouter)
app.use("/api/meal", mealRouter)

cron.schedule("0 0 * * *", () => {
    console.log("Running a task every day at midnight");
    resetDailyMeal()
});

app.listen(port,() => {
    console.log(`Server running on port http://localhost:${port}`)
})