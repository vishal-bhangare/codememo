import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

let lastId = 0

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name
      })
    },
    userRemoved: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state.splice(index, 1);
    }
  }
})
export const { userAdded, userRemoved } = userSlice.actions;
export default userSlice.reducer;

// selector

export const getPendingTodos = createSelector(state => state,
  state => state.filter(todo => !todo.completed))