import { useState } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Success from "./Success"
function App(props)
{
    const [user,setuser]=useState("")
    const [pass,setpass]=useState("")
    const [reguser,setreguser]=useState(true)
    const [text,setext]=useState(true)

    const navigate=useNavigate()



    const handleuser=(event)=>{
        setuser(event.target.value)

    }

    function handlepass(bp)
    {
        setpass(bp.target.value)

    }




    function clickme()
    {
        var logged=axios.post("https://login-full-stack-1.onrender.com",{"username":user,"password":pass})
        logged.then((data)=>{
            if(data.data==true)
            {
                navigate("/success")
            }
            else
            {
                setreguser(false)
                setext(false)
            }
        })
    }








    return(<div>
        <div className="bg-mouse h-screen">
            <div className="flex justify-center items-center flex-wrap">
                <div className="bg-white bg-opacity-50 p-10 mt-[15%] w-[450px] rounded-xl">
                    <div>
                        {
                            text?<h1 className="text-4xl font-bold m-3 text-center">Hi..😊</h1>:<h1 className="text-4xl text-center m-3 font-bold">Sorry..😔🥲</h1>
                        }
                    <div className="flex justify-center items-center">
                    {
                        reguser?<p className="text-xl m-2 font-serif font-bold">Track your Weekend plans</p>:<p className="text-xl font-serif font-bold text-red-900">Please Login to Explore More</p>
                    }
                    </div>
                    <div className="flex-col justify-center items-center">             
                    <input type="text" value={user} name="username" onChange={handleuser}  className="p-2 border border-black rounded-md bg-slate-100 m-1 w-[100%] hover:focus:outline-none"  placeholder="your username"/> <br />
                    <input type="password" value={pass} name="password" onChange={handlepass} className="p-2 border border-black rounded-md bg-slate-100 m-1 w-[100%] hover:focus:outline-none" placeholder="your password"/> <br />
                    </div>
                    <div className="flex justify-center items-center flex-wrap">
                    <button className="bg-blue-400 font-serif text-black  p-2 rounded-md" onClick={clickme}>Login button</button>
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                    <p className="text-red-950">Dont't have an Account?</p>
                     <Link to={"/signup"} className="underline">Log in</Link>
                     </div>
                </div>    

                </div>

            </div>

        </div>
    </div>)

}
export default App