require("dotenv").config();
const express = require('express');
const port = process.env.PORT || 8000;
const authRoutes = require("./routes/auth.routes");


const app = express()

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));


// route middlewares
app.use("/api", authRoutes);



app.listen(port,()=>{
    console.log(`sharif's server is listening on http://localhost:${port}`)
})