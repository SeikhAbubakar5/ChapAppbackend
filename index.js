require("dotenv").config({path:"src/.env"})
const express =require('express')
const mongoose= require("mongoose")
const chatRoutes=require("./src/Router/chatRoutes")
const userRoutes=require("./src/Router/userRoutes")
const app = express();
app.use(express.json());

// Routes
app.use('/api/user',userRoutes)
app.use('/api/chat', chatRoutes);

// connect to mogoDB
mongoose.connect(process.env.MONGODB_URI,{ 
}) .then(()=>{
    console.log("MongoDB conected")
}).catch((error)=>{
    console.log(error)
})
// Start server
const PORT=process.env.PORT || 8081;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})