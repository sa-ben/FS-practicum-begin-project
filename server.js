const express = require("express")

const app = express()


const PORT = process.env.PORT || 5555

app.use("/api/users", require("./routes/userRoutes"))

app.get("/", (req, res) => {
    res.json("test")
})

app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`);
})
