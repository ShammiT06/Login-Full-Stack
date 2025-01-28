import { useState } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
function Signup()
{
    const [newuser,setnew]=useState("")
    const [newpass,setpass]=useState("")
    const [config,setcon]=useState("")


    const handlenew=(pot)=>{
        setnew(pot.target.value)
    }

    const handlepass=(dog)=>{
        setpass(dog.target.value)
    }

    const handleconfirm=(back)=>{
        setcon(back.target.value)
    }

    function adduser()
    {
        var striff=axios.post("http://localhost:5000/adduser",{"usernew":newuser,"passnew":newpass})
        striff.then((data)=>{
            console.log(data)
            alert("New user has been added...")
        })
    }





    
    return( 
        <div className="bg-mouse h-screen">
    <div className="flex justify-center items-center flex-wrap">
        <div className="bg-white bg-opacity-50 p-10 mt-[15%] w-[450px] rounded-xl">
            <div>
            <h1 className="text-4xl font-bold m-3 text-center">Please Login 👤🔒 </h1>
            <div className="flex-col justify-center items-center">             
            <input type="text" name="usernew" value={newuser} onChange={handlenew}  className="p-2 border border-black rounded-md bg-slate-100 m-1 w-[100%] focus:outline-none"  placeholder="your username"/> <br />
            <input type="password" name="passnew" value={newpass} onChange={handlepass} className="p-2 border border-black rounded-md bg-slate-100 m-1 w-[100%] focus:outline-none" placeholder="your password"/> <br />
            <input type="password" name="confirmpass" value={config} onChange={handleconfirm} className="p-2 border border-black rounded-md bg-slate-100 m-1 w-[100%] focus:outline-none" placeholder="Confirm Password" />
            </div>
            <div className="flex justify-center items-center flex-wrap">
            <button className="bg-blue-400 font-serif text-black  p-2 rounded-md" onClick={adduser}>Submit</button>
            </div>
            </div>
            <div className="flex gap-2 mt-2 flex-wrap">
            <p className="text-red-950">Alredy have an Account?</p>
             <Link to={"/"} className="underline">Log-in</Link>
             </div>
        </div>
        </div>    

        </div>)

}
export default Signup