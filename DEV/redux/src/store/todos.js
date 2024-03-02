import { createAction, createReducer } from '@reduxjs/toolkit'



// Actions creators
export const todoAdded = createAction("todoAdded")
export const todoRemoved = createAction("todoRemoved")
export const todoCompleted = createAction("todoCompleted")
export const todoUpdated = createAction("todoUpdated")

// Reducer

let lastId = 0;

export default createReducer([], (builder) => {
  builder
    .addCase(todoAdded.type, (todos, action) => {
      todos.push({
        id: ++lastId,
        title: action.payload.title,
        completed: false
      })
    })
    .addCase(todoCompleted.type, (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      state[index].completed = true
    })
})
