const express = require ('express');

const app = express()
app.get("",(req,res)=>{

res.send("<h1>Hello</h1>");

})
app.get("/zaylinhtet",(req,res)=>{

    res.send("<h1>Welcome from from my assignment</h1>")
})

app.get("/codelearner",(req,res)=>{
        res.send("<h1>My name is Zay Lin Htet</h1>")
})
app.get("/finalone",(req,res)=>{
    res.send("<h1>Thanks for giving attention</h1>")
})
app.listen (3000,()=>{

    console.log ('Server is listening to port:3000:');

})