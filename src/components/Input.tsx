
function Input({title,type,placeholder,onChange}:{title:string,type:string,placeholder:string,onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}){
    return(
        <div className="w-full">
            <div className="font-semibold">{title}</div>
            <div className="border border-slate-300 w-full p-1 rounded my-2">
                <input type={type} placeholder={placeholder} className="w-full outline-none p-1" onChange={onChange}/>
            </div>
        </div>
    )
}

export default Input;