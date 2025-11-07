import BlogPost from "./BlogPost";

function BlogList({ posts, handleEdit, handleDelete }) {
  if (posts.length === 0) {
    return <p className="no-posts">No posts yet. Add a new blog post!</p>;
  }

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          post={post}
          handleEdit={() => handleEdit(post.id)}      // pass ID
          handleDelete={() => handleDelete(post.id)}  // pass ID
        />
      ))}
    </div>
  );
}

export default BlogList;
