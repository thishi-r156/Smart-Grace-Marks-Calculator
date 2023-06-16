require("dotenv").config()
const express = require ("express")
const mongoose= require("mongoose")
const profileRoutes = require("./routes/profiles");
const requestRoutes = require("./routes/requests");

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/smart-gracemarks-calculator/profile", profileRoutes)
app.use("/smart-gracemarks-calculator/requests", requestRoutes);

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen((process.env.PORT), () => {
            console.log("Connected to db & listening on port 4000")
            })
    })
    .catch((error) => {
        console.log(error)
    })

