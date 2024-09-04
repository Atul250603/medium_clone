import { useNavigate } from "react-router-dom";

function BlogCard({title,username,content,id}:{title:string,username:string,content:string,id:string}){
    const navigate=useNavigate();
    return(
        <div key={id} onClick={()=>navigate(`/blog/${id}`)} className="p-4 w-full lg:w-3/4 border-b border-b-slate-600 cursor-pointer">
            <div className="flex gap-2 items-center">
                <div className="bg-black text-white py-1 rounded-full px-3">{username[0].toUpperCase()}</div>
                <div>{username}</div>
            </div>
            <div className="font-bold text-xl my-2">{title}</div>
            <div className="my-2">{(content.length>100)?content.substring(0,100)+".....":content}</div>
            <div className="bg-slate-300 w-max px-2 py-1 rounded-full">
                {Math.max(content.length/100,1)} min read
            </div>
        </div>
    )
}   
export default BlogCard;