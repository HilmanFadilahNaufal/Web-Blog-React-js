import { useState  } from "react"
import { useNavigate , useParams} from 'react-router-dom'
import useFetch from "./usefetch"

const Create = () => {
const [title, setTitle] = useState('')
const [body, setBody] = useState("")
const [author, SetAuthor] = useState("Rani")
const [isPending , setIsPending ] = useState (false)
const navi = useNavigate()
let { query, sort ,id } = useParams();
const { data: blog, error  } = useFetch('http://localhost:8000/blogs/' + id)
console.log(blog)

const handleSubmit = (e) => {
  e.preventDefault()
  const blog = { title, body, author }

  setIsPending(true)

  fetch ('http://localhost:8000/blogs' , {
    method: 'POST',
    headers: {"content-type": "application/json"},
    body: JSON.stringify(blog)

  }).then(() =>{
    console.log("new blog hilman")
    setIsPending(false)
   navi('/')
  })
}

  return (  
    <div className="create">
      <h2>Add a New</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type='text'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
           <label>Blog Body:</label>
        <textarea
         required 
         value={body}
         onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
        value={author}
        onChange={(e) => SetAuthor (e.target.value)}
        >
          <option value="Rani">Rani</option>
          <option value="Fira">Fira</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        <p>{title}</p>
        <p> {body}</p>
        <p> {author}</p>
      </form>
    </div>
  )
}
  
export default Create
