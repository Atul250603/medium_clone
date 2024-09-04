import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

function Navbar(){
    const navigate=useNavigate();
    useEffect(()=>{
        function checkToken(){
            const token=localStorage.getItem('token');
            if(!token){
                navigate('/signin');
            }
        }
        checkToken();
    },[])
    function logoutHandler(){
        localStorage.removeItem('token')
        navigate('/signin')
    }
    return(
        <div className="border-b-2 border-b-black">
            <div className="flex justify-between items-center p-2">
                <div className="font-bold text-xl cursor-pointer" onClick={()=>navigate('/blogs')}>Medium</div>
                <div>
                    <button className="bg-black text-white p-2 rounded-lg" onClick={logoutHandler}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar