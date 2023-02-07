// import { useState, useEffect } from 'react';
import BlogList from './Blog.list';
import useFetch from './usefetch';
const Home = () => {
const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

const handleDelete = (id) =>{
  const newBlogs = blogs.filter(blog => blog.id !== id)
  setBlogs(newBlogs)
}

  return ( 
    <div className="home">
      { error && <div>{error}</div>}
    {isPending && <div>Loading...</div>}
    {blogs && < BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
    </div>
   )

  }
export default Home;