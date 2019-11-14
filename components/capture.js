import React, { useState } from "react";

const Capture = props => {
  const [text, setText] = useState("");

  const addTask = () => {
    const task = {
      type: "ADD_TASK",
      payload: { message: text, completed: false, hidden: false }
    };
    props.dispatch(task);
  };

  return (
    <div className="Task">
      <input
        type="text"
        placeholder="What?...."
        onChange={e => setText(e.target.value)}
      ></input>
      <button onClick={addTask}> Add</button>
      <style jsx>{`
        .Task {
          display: flex;
          justify-content: center;
          padding-top: 3em;
        }
      `}</style>
    </div>
  );
};

export default Capture;
