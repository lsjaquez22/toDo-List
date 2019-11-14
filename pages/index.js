import React, { useReducer } from "react";
import Task from "../components/task";
import Capture from "../components/capture";
import Buttons from "../components/buttons";
import { reducer } from "../store/reducer";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div className="container">
      <Capture dispatch={dispatch} />
      {state.map(t => (
        <Task
          key={t.id}
          id={t.id}
          text={t.message}
          completed={t.completed}
          dispatch={dispatch}
          hidden={t.hidden}
        />
      ))}
      <Buttons dispatch={dispatch} />
      <style jsx>
        {`
          .container {
            height: 30em;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
