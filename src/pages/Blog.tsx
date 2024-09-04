import { useRecoilValue } from "recoil";
import Navbar from "../components/Navbar";
import { blogSelector } from "../store/store";
import { useParams } from "react-router-dom";
import CreateButton from "../components/CreateButton";
import useCheckToken from "../hooks/useCheckToken";

function Blog(){
    useCheckToken();
    const params=useParams<string>();
    const id=params.id || "";
    const blog=useRecoilValue(blogSelector(id));   
    return(
        <div>
            <Navbar/>
            <div className="mt-4 px-4">
                {(blog)?<div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-[80%] ">
                        <div className="text-3xl font-bold">{blog.title}</div>
                        <div className="my-2">{blog.content}</div>
                    </div>
                    <div className="bg-slate-300 p-2 rounded md:bg-white">
                        <div className="text-lg mt-2 font-semibold">Author Name</div>
                        <div className="flex items-center gap-2">
                        <div className="bg-black text-white py-1 rounded-full px-3">{blog.author.name[0].toUpperCase()}</div>
                            <div>
                                <div className="font-bold text-2xl">{blog.author.name}</div>
                                <div className="text-slate-500 my-2">Master of mirth, purveyors of puns, and the funniest person in the kingdom.</div>
                            </div>
                        </div>
                    </div>
                    
                </div>:<></>}
            </div>
            <CreateButton/>
        </div>
    )
}

export default Blog;