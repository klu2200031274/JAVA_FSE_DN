import React from "react";

const blogs = [
  { id: 1, title: "Understanding JSX", date: "2025-01-10" },
  { id: 2, title: "React Hooks in Depth", date: "2025-02-05" },
  { id: 3, title: "State Management with Context API", date: "2025-02-20" },
];

const BlogDetails = () => (
  <div>
    <h3>Blog Details</h3>
    <ul style={styles.list}>
      {blogs.map((blog) => (
        <li key={blog.id} style={styles.item}>
          {blog.title} - <i>{blog.date}</i>
        </li>
      ))}
    </ul>
  </div>
);

const styles = {
  list: { listStyleType: "none", padding: 0 },
  item: {
    margin: "8px",
    padding: "6px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
};

export default BlogDetails;
