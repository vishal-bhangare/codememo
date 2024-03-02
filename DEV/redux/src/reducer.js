import * as actions from "./actionTypes";

let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case actions.TODO_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          completed: false
        }
      ]
    case actions.TODO_REMOVED:
      return state.filter(todo => todo.id != action.payload.id)

    case actions.TODO_COMPLETED:
      return state.map(todo => todo.id !== action.payload.id ? todo : { ...todo, completed: true })

    default:
      return state;
  }
}

export default reducer