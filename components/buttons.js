import React from "react";

const Buttons = props => {
  const onlyCompleted = () => {
    const task = {
      type: "COMPLETE_TASK"
    };
    props.dispatch(task);
  };
  const all = () => {
    const task = {
      type: "ALL_TASK"
    };
    props.dispatch(task);
  };
  return (
    <div className="Task">
      <button onClick={all}> All</button>
      <button onClick={onlyCompleted}> Completed</button>
      <style jsx>{`
        .Task {
          margin-top: 1em;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Buttons;
