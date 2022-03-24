const express=require('express');
const app=express();
const product=require("./api/product");

app.use(express.json({extended:false}));
app.use("/api/product",product);

const port=8080;
app.listen(port,()=>console.log('service is r ${PORT}'));
