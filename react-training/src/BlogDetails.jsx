import { useParams, useNavigate } from "react-router-dom"
import useFetch from "./usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error , isPending } = useFetch('http://localhost:8000/blogs/' + id)
  const navi = useNavigate()

  const handleClick= () => {
  fetch ('http://localhost:8000/blogs/' + blog.id, {
    method:'DELETE'
  }).then (()=>{
    navi('/')
  })
  }
  const handleEdit= () => {
    fetch ('http://localhost:8000/blogs/' + blog.id, {
      method:'PATCH'
    }).then (()=>{
      navi('/edit/'+ blog.id)
    })
    }
    
  return ( 
<div className="blog-details">
  {isPending && <div>Loading....</div>}
  {error && <div>{error}</div>}
  {blog && (
    <article>
      <h2>{blog.title}</h2>
      <p>Writen by {blog.author}</p>
      <div>{blog.body}</div>
      <button onClick={handleClick}>Delete</button>
      <button onClick={() => handleEdit(blog.id)}>Edit</button>


    </article>
    
  )}
 
</div>

   )
}
 
export default BlogDetails;