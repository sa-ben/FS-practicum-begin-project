require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")
connectDB()

const app = express()

const PORT = process.env.PORT || 5220

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("publicFiles"))
app.use("/api/users", require("./routes/userRoute"))

app.get("/", (req, res) => {
    res.json("test")
})

mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
    app.listen(PORT, () => {
        console.log(`server running at port ${PORT}`);
    })
})

mongoose.connection.on('error', () => {
    console.log(error);
})
