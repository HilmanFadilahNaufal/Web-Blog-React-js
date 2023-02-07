import { useNavigate } from 'react-router-dom'

function EditBlog({ match }) {
  const Navi = useNavigate()
  const [blog, setBlog] = useState({})
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    async function fetchBlog() {
      const response = await fetch('http://localhost:8000/blogs/' + id)
      const data = await response.json()
      setBlog(data)
      setTitle(data.title)
      setContent(data.content)
    }
    fetchBlog()
  }, [match.params.id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:8000/blogs/'+blog.id, {
      method: 'EDIT',
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ title, content }),
    })
    if (response.ok) {
      Navi('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Edit</button>
    </form>
  )
}
export default EditBlog