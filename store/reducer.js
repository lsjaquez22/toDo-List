let lastId = -1;

export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      lastId += 1;
      console.log(state);
      return [...state, { ...action.payload, id: lastId }];
    case "TOGGLE_TASK":
      return state.map(t => todo(t, action));
    case "COMPLETE_TASK":
      return completeTask(state);
    case "ALL_TASK":
      console.log(state);
      return allTask(state);
    default:
      throw new Error();
  }
};

const todo = (state, action) => {
  if (action.id === state.id) {
    return { ...state, completed: !state.completed };
  }
  return state;
};

const completeTask = state => {
  state.forEach(t => {
    if (!t.completed) {
      t.hidden = true;
    }
  });
  return [...state];
};

const allTask = state => {
  state.forEach(t => {
    t.hidden = false;
  });
  return [...state];
};
