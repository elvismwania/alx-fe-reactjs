import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}

const PostsComponent = () => {
  const { data, isLoading, error, refetch } = useQuery('posts', fetchPosts, {
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <div>Loading posts...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <button onClick={refetch} style={{ marginBottom: '1rem' }}>
        Refresh Posts
      </button>
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        {data?.map(post => (
          <div key={post.id} style={{ 
            padding: '1rem', 
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsComponent
