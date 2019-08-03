import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function App() {
  const [item, addItem] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const [input] = e.target;
    addItem([...item, input.value]);
  };
  // ✨TODO: Using React.createElement() create a variable
  // for input and add it below.

  // ✨TODO: Using React.createElement() create a variable
  // for button and add it to the do
  return (
    <section className="App">
      <h1 className="heading">My grocery list</h1>
      {item.map((list, index) => (
        <li className="list" key={index}>
          {list}
        </li>
      ))}

      <form onSubmit={handleSubmit}>
        {/* 🐨Replace input with your new variable*/}
        <input type="text" />
        {/* 🐨 Replace button with your new variable*/}
        <button>Submit</button>
      </form>
    </section>
  );
}
// 💯  Extra Credit: Use React.createElement() instead of js
// on the entire <section>

// DO NOT TOUCH BELOW

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
