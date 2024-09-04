import Forms from "../components/Forms";
import Quotes from "../components/Quotes";

function Signin(){
    return(
        <div className="w-100 h-screen flex">
            <div className="w-full h-full lg:w-1/2 flex items-center justify-center">
                <Forms title="Signin"/>
            </div>
            <div className="hidden lg:block w-1/2 h-full">
                <Quotes/>
            </div>
        </div>
    )
}

export default Signin;