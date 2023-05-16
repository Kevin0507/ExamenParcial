const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const userRoutes = require('./src/routes/user');
const restaurantRoutes = require('./src/routes/restaurant');

const app=express();
const port=process.env.PORT || 3000;


app.use(express.json());
app.use('/api',userRoutes);
app.use('/api',restaurantRoutes);

//routes
app.get('/',(req,res)=>{
    res.send("Welcome");
});

//conección a mongodb atlas
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("Conectado a MongoDB Atlas")).catch((error)=>console.log(error));

app.listen(port, () => console.log('server listening on port',port));