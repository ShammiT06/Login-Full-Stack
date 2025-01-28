import { Link } from "react-router-dom"
function Success()
{ 
    return( 
        <div className="bg-mouse h-screen">
    <div className="flex justify-center items-center flex-wrap">
        <div className="bg-white bg-opacity-50 p-10 mt-[15%] w-[450px] rounded-xl">
            <h1 className="text-center font-serif text-3xl font-bold">Hello...</h1>
            <p className="text-xl font-serif mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> 
            Eos veniam exercitationem eaque, nisi commodi possimus dignissimos! Voluptatem sequi cupiditate cumque. <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
             Sequi quis ratione labore cumque voluptas dicta nihil aut excepturi eaque eum?</p>
            <div className="flex justify-center items-center mt-5">
            <Link to={'/'} className="bg-orange-500 p-2 rounded-md font-serif font-bold">Log Out</Link>
            </div>
           
        </div>
        </div>
        </div>
    )

}
export default Success