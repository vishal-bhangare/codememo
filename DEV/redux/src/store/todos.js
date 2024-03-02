import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

let lastId = 0;
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAssignedToUser: (todos, action) => {
      const { todoId, userId } = action.payload;
      const idx = todos.findIndex(todo => todo.id === todoId)
      todos[idx].userId = userId
    },
    todoAdded: (todos, action) => {
      todos.push({
        id: ++lastId,
        title: action.payload.title,
        completed: false
      })
    }
    ,
    todoCompleted: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      state[index].completed = true
    },
    todoRemoved: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state.splice(index, 1);
    }
  }
})
export const { todoAdded, todoCompleted, todoRemoved, todoAssignedToUser } = todoSlice.actions;
export default todoSlice.reducer;

// selector
export const getPendingTodos = createSelector(state => state.entities.todos,
  todos => todos.filter(todo => !todo.completed))

export const getTodosByUsers = userId => createSelector(state => state.entities.todos,
  todos => todos.filter(todo => todo.userId == userId))