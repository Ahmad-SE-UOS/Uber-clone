const dotenv=require('dotenv');
dotenv.config();

let express=require("express");
const cors=require("cors")

const app=express();

app.use(cors());


app.get("/",(req,res)=>{
    res.send('Hello world')
})


module.exports=app



