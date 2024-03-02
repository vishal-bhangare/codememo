// Actions types
const TODO_ADDED = "todoAdded";
const TODO_REMOVED = "todoRemoved";
const TODO_COMPLETED = "todoCompleted";

// Action Creators
export const todoAdded = title => ({
  type: TODO_ADDED,
  payload: {
    title: title
  }
})

export const todoRemoved = id => ({
  type: TODO_REMOVED,
  payload: {
    id: id
  }
})

export const todoCompleted = id => ({
  type: TODO_COMPLETED,
  payload: {
    id: id
  }
})


// Reducer

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case TODO_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          completed: false
        }
      ]
    case TODO_REMOVED:
      return state.filter(todo => todo.id != action.payload.id)

    case TODO_COMPLETED:
      return state.map(todo => todo.id !== action.payload.id ? todo : { ...todo, completed: true })

    default:
      return state;
  }
}
