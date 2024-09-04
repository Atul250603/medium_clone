function BlogsSkeleton() {
  return (
    <div className="flex flex-col items-center mt-4">
        <div className="p-4 w-full lg:w-3/4 border-b border-b-slate-600 cursor-pointer">
            <div className="flex gap-2 items-center">
                <div className="bg-black text-white py-3 rounded-full px-3 bg-slate-300 w-[20px] h-[20px]">{""}</div>
                <div className="bg-slate-300 w-[40px] p-2 rounded-full">{" "}</div>
            </div>
            <div className="font-bold text-xl my-2 bg-slate-300 w-[40px] p-2 rounded-full">{" "}</div>
            <div className="my-2 bg-slate-300 w-full h-[50px]">{" "}</div>
            <div className="bg-slate-300 w-max px-2 py-2 rounded-full bg-slate-300 w-[30px] ">
                {" "}
            </div>
        </div>
    </div>
  )
}

export default BlogsSkeleton;