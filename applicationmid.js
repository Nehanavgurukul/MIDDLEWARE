const express = require("express")
const app = express()
const port = 8000;

// application level middleware 
app.use((req,res,next)=>{
    console.log("helllllooooo")
    next()
})

app.get("/u",(req,res) => {
    res.send("byeeee")
})

app.get("/hi",(req,res) => {
    res.send("bye bye")
})

app.listen(port,() => {
    console.log(`server is running on ${port}`)
})