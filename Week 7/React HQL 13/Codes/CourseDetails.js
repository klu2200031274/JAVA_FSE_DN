import React from "react";

const courses = [
  { id: 1, name: "ReactJS Bootcamp", duration: "3 months" },
  { id: 2, name: "Full Stack Development", duration: "6 months" },
  { id: 3, name: "JavaScript Mastery", duration: "2 months" },
];

const CourseDetails = () => (
  <div>
    <h3>Course Details</h3>
    <ul style={styles.list}>
      {courses.map((course) => (
        <li key={course.id} style={styles.item}>
          {course.name} - <i>{course.duration}</i>
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

export default CourseDetails;
