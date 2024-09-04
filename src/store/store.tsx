import axios from "axios";
import {atom, selector, selectorFamily } from "recoil";
interface User{
    name:string
}
interface Blog{
    id:string,
    title:string,
    content:string,
    author:User
}

export const blogsSelector=selector<Blog[]>({
    key:"blogs",
    get:async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/bulk`,{
            headers:{
                Authorization:'Bearer '+localStorage.getItem("token")
            }
        });
        return data.posts;    
    }
})

export const blogsAtom=atom<Blog[]>(
    {
        key:"blogAtom",
        default:blogsSelector
    }
)

export const blogSelector = selectorFamily<Blog | undefined, string>({
    key: "blog",
    get: (id) => ({ get }) => {
      const blogs: Blog[] = get(blogsAtom);
      return blogs.find((element: Blog) => element.id === id);
    },
  });
