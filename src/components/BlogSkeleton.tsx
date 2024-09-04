import Navbar from "./Navbar";

function BlogSkeleton(){
    return(
        <div className="h-screen flex flex-col grow">
            <Navbar/>
            <div className="mt-4 px-4 h-full">
                <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-[70%] h-full flex flex-col grow">
                        <div className="text-3xl font-bold w-[50%] h-[40px] bg-slate-300 rounded-full my-4">{" "}</div>
                        <div className="w-full md:w-[60%] h-full bg-slate-300 rounded-lg p-2 mb-4">{" "}</div>
                    </div>
                    <div className="w-full md:w-[30%]">
                        <div className="text-lg w-[1/2] h-[30px] bg-slate-300 p-2 rounded-full">{" "}</div>
                        <div className="flex items-center gap-2 my-4 w-full">
                        <div className="bg-black text-white py-3 rounded-full px-3 bg-slate-300 h-[40px] w-[40px]">{" "}</div>
                            <div className="w-full">
                                <div className="font-bold text-2xl bg-slate-300 w-[3/4] h-[30px] my-4 rounded-full">{" "}</div>
                                <div className="text-slate-500 w-full h-[20px] bg-slate-300 rounded-lg">{" "}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default BlogSkeleton;