import { useRecoilValue } from "recoil";
import Navbar from "../components/Navbar";
import useCheckToken from "../hooks/useCheckToken";
import { blogsAtom } from "../store/store";
import BlogCard from "../components/BlogCard";
import CreateButton from "../components/CreateButton";
function Blogs(){
    useCheckToken();
    const blogs=useRecoilValue(blogsAtom);
    return(
        <div>
            <Navbar/>
            <div className="flex flex-col items-center mt-4">
               {
                (blogs)?blogs.map((element)=><BlogCard key={element.id} title={element.title} content={element.content} id={element.id} username={element.author.name}/>):<></>
               }
            </div>
            <CreateButton/>
        </div>
    )
}

export default Blogs;