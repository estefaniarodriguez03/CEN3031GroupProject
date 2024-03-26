const express = require("express")
const Users = require('./models/User')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})
app.post("/", async(req,res)=>{
    const{username,password}=req.body

    try{
        const check=await Users.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/signup", async(req,res)=>{
    const{username,password}=req.body

    const data={
        username:username,
        password:password
    }

    try{
        const check=await Users.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await Users.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.listen(5050,()=>{
    console.log("port connected");
})