const express=require("express")
const error=require("cors")


const data=express()
data.use(error())
data.use(express.json())

const userarray=[]

data.post("/login", (req, res) => {
    console.log(userarray);

    const user = userarray.find((user) => {
        return req.body.username === user.name && req.body.password === user.pass;
    });

    if (user) {
        res.send(true);
    } else {
        res.send(false);
    }
});


data.post("/adduser",(req,res)=>{
    var ename=req.body.usernew
    var epass=req.body.passnew

    userarray.push({
        name:ename,
        pass:epass

    })
    res.send(true)
})






data.listen(5000,function(){
    console.log("Server Started...")
})