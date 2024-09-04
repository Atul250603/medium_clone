import { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { signinType,signupType } from "@atul250603/common-app";
function Forms({title}:{title:string}){
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [name,setName] = useState<string>("");
    const [showSpinner,setshowSpinner]=useState(false);
    const navigate=useNavigate();
    function emailChange(e:React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value);
    }
    function passwordChange(e:React.ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value);
    }
    function nameChange(e:React.ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }
    async function clickHandler(){
        try{
            setshowSpinner(true);
            const url:string=import.meta.env.VITE_BACKEND_URL;
            if(title=='Signup'){
                const body:signupType={email,password,name};
                const resp=await axios.post(`${url}/user/signup`,body);
                const data=resp.data;
                if(!data || data.error){
                    if(!data)throw "Some Error Occured";
                    throw data.error;
                }
                else{
                    toast.success("User Created Successfully");
                    localStorage.setItem("token",data.token);
                    navigate("/blogs");
                }
            }
            else if(title=='Signin'){
                const body:signinType={email,password};
                const resp=await axios.post(`${url}/user/signin`,body);
                const data=resp.data;;
                if(!data || data.error){
                    if(!data)throw "Some Error Occured";
                    throw data.error;
                }
                else{
                    toast.success("User Logged In Successfully");
                    localStorage.setItem("token",data.token);
                    navigate("/blogs");
                }
            }
            else{
                throw "Some Error Occured";
            }
            setshowSpinner(false);
        }
        catch(error:any){
            if (axios.isAxiosError(error)) {
                toast.error(error.message);
            }
            else{
                toast.error(error)
            }
            setshowSpinner(false);
            return;
        }
    }

    return(
        <div className="w:full lg-w-3/4 flex flex-col items-center">
            <div className="font-bold text-3xl">
                {(title==="Signup")?"Create an account":"Login to your account"}
            </div>
            <div className="text-slate-500 my-2">
                {(title==="Signup")?<div>"Already have an account?" <Link to="/signin" className="underline">Login</Link></div>:<div>"Don't have an account?" <Link to="/signup" className="underline">Signup</Link></div>}
            </div>
            <div className="my-2 w-full">
                {(title==="Signup")?<Input title="Username" type={"text"} placeholder={"Enter your username"} onChange={nameChange}/>:<></>}
            </div>
            <div className="my-2 w-full">
                <Input title={"Email"} type={"text"} placeholder={"m@example.com"} onChange={emailChange}/>
            </div>
            <div className="my-2 w-full">
                <Input title={"Password"} type={"password"} placeholder={""} onChange={passwordChange}/>
            </div>
            <div className="my-2 w-full">
                <button className="w-full bg-black text-white rounded p-2 disabled:bg-slate-600" onClick={clickHandler} disabled={showSpinner}><div className="flex gap-2 items-center justify-center">
                {(showSpinner)?<div>
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg></div>:<></>}
                    <div>
                        {title}
                    </div>
                </div></button>
            </div>
        </div>
    )
}
export default Forms;