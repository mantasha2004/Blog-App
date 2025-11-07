function BlogForm({ title, setTitle, content, setContent, handleSubmit, editId }) {
  return (
    <div className="blog-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter blog content"
            rows="5"
          ></textarea>
        </div>
        <button type="submit">{editId ? 'Update Post' : 'Submit Post'}</button>
      </form>
    </div>
  );
}

export default BlogForm;