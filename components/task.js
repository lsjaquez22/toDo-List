import React, { useState } from "react";

const Task = props => {
  const show = props.hidden;
  const toggle = () => {
    props.dispatch({
      type: "TOGGLE_TASK",
      id: props.id
    });
  };
  return (
    <div className="containerTask">
      <div className="task">
        {show == false && (
          <div className="detailTask">
            <input
              type="checkbox"
              value={props.completed}
              onChange={toggle}
            ></input>
            <spam className={props.completed ? "marked" : ""}>
              <span className="content"></span>
              {props.text}
            </spam>
          </div>
        )}

        <style jsx>{`
          .task {
            font-size: 20px;
            display: flex;
            justify-content: center;
          }
          .detailTask {
            padding-top: 10px;
          }
          .content {
            margin-left: 10px;
          }
          .task input[type="checkbox"] {
            -ms-transform: scale(1.5);
            -moz-transform: scale(1.5);
            -webkit-transform: scale(1.5);
            -o-transform: scale(1.5);
            transform: scale(1.5);
            padding: 10px;
          }
          .marked {
            color: gray;
            text-decoration: line-through;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Task;
