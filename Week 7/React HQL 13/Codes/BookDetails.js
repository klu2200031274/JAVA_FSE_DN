import React from "react";

const books = [
  { id: 1, title: "React Basics", author: "Dan Abramov" },
  { id: 2, title: "Learning JavaScript", author: "Kyle Simpson" },
  { id: 3, title: "Advanced React Patterns", author: "Kent C. Dodds" },
];

const BookDetails = () => (
  <div>
    <h3>Book Details</h3>
    <ul style={styles.list}>
      {books.map((book) => (
        <li key={book.id} style={styles.item}>
          {book.title} - <i>{book.author}</i>
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

export default BookDetails;
