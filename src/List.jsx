import React, { useState } from "react";

function List() {
  const [comments, setComment] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const addComment = () => {
    if (!inputValue.length) return;
    setComment([...comments, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <label htmlFor="list">
        Your comment:
        <input id="list" value={inputValue} onInput={handleInput} />
      </label>
      <input type="submit" value="Submit" onClick={addComment} />
      <div>
        <ul>
          {comments.map((item) => (
            <li key={item.toString()}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default List;
