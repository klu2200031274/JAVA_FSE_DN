import React, { useState } from "react";
import BlogDetails from "./Components/BlogDetails";
import BookDetails from "./Components/BookDetails";
import CourseDetails from "./Components/CourseDetails";


function App() {
  const [view, setView] = useState("book");

  // Efficient single conditional rendering using switch
  const renderContent = () => {
    switch (view) {
      case "book":
        return <BookDetails />;
      case "blog":
        return <BlogDetails />;
      case "course":
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  return (
    <div style={styles.container}>
      <h1>Blogger App</h1>

      {/* Navigation Buttons */}
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => setView("book")}>
          Books
        </button>
        <button style={styles.button} onClick={() => setView("blog")}>
          Blogs
        </button>
        <button style={styles.button} onClick={() => setView("course")}>
          Courses
        </button>
      </div>

      <hr style={{ margin: "20px 0" }} />

      {/* Render Selected Content */}
      {renderContent()}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    marginTop: "20px",
  },
  buttonGroup: {
    marginBottom: "20px",
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default App;
