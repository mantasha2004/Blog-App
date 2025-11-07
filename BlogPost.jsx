function BlogPost({ post, handleEdit, handleDelete }) {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-actions">
        <button onClick={() => handleEdit(post)}>Edit</button>
        <button onClick={() => handleDelete(post.id)}>Delete</button>
      </div>
    </div>
  );
}

export default BlogPost;