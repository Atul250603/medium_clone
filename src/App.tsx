import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import './App.css'
import { Toaster } from "react-hot-toast"
import Blogs from "./pages/Blogs"
import { Suspense } from "react"
import Create from "./pages/Create"
import BlogsSkeletonPage from "./components/BlogsSkeletonPage"
import BlogSkeleton from "./components/BlogSkeleton"

function App() {

  return (
    <>
      <Toaster/>
      <div>
        <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/blog/:id" element={<Suspense fallback={<BlogSkeleton/>}><Blog/></Suspense>}/>
            <Route path="/blogs" element={<Suspense fallback={<BlogsSkeletonPage/>}><Blogs/></Suspense>}/>
            <Route path="/create" element={<Create/>}/>
            
        </Routes>
      </div>
    </>
  )
}

export default App
