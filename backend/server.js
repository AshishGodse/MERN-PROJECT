const express =  require('express');
const cors =  require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useUnifiedTopology: true ,useNewUrlParser:true,useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open',()=>{console.log("🎊 Connected to MongoDB 🎊")})

app.listen(port ,()=>{
    console.log(`🔌 server is running on port : ${port}`);
})