import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import "./App.css";

function App() {
  // Load posts from localStorage
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Load theme from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // Save posts whenever they change
  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Submit or update post
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editId) {
      // Update existing post
      setPosts(
        posts.map((post) =>
          post.id === editId ? { ...post, title, content } : post
        )
      );
      setEditId(null);
    } else {
      // Add new post
      setPosts([
        ...posts,
        { id: Date.now(), title: title.trim(), content: content.trim() },
      ]);
    }

    setTitle("");
    setContent("");
    setShowForm(false);
  };

  // Edit post
  const handleEdit = (id) => {
    const post = posts.find((p) => p.id === id);
    if (!post) return;
    setTitle(post.title);
    setContent(post.content);
    setEditId(post.id);
    setShowForm(true);
  };

  // Delete post
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <NavBar
        setShowForm={setShowForm}
        showForm={showForm}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {showForm && (
        <BlogForm
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          handleSubmit={handleSubmit}
          editId={editId}
        />
      )}

      <BlogList
        posts={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
