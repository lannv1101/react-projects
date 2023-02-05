import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amout = parseInt(count);
    if (amout < 0) {
      amout = 1;
    }
    if (amout > 8) {
      amout = 8;
    }
    setText(data.slice(0, amout));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="loren-form" onClick={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <buttom type="submit" className="btn">
          generate
        </buttom>
      </form>
      <article className="lorem-text">
        <p></p>
        <p>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </p>
      </article>
    </section>
  );
}

export default App;
