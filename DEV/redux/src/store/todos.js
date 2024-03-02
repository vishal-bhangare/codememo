import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

let lastId = 0;
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    todosRequested: (todos, action) => {
      todos.loading = true;
    },

    todosReceived: (todos, action) => {
      todos.list = action.payload;
      todos.loading = false;
      todos.lastFetch = Date.now();
    },

    todosRequestFailed: (todos, action) => {
      todos.loading = false;
    },
    todoAssignedToUser: (todos, action) => {
      const { todoId, userId } = action.payload;
      const idx = todos.list.findIndex((todo) => todo.id === todoId);
      todos.list[idx].userId = userId;
    },
    todoAdded: (todos, action) => {
      todos.list.push({
        id: ++lastId,
        title: action.payload.title,
        completed: false,
      });
    },
    todoCompleted: (state, action) => {
      const index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.list[index].completed = true;
    },
    todoRemoved: (state, action) => {
      const index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.list.splice(index, 1);
    },
  },
});
export const {
  todoAdded,
  todoCompleted,
  todoRemoved,
  todoAssignedToUser,
  todosReceived,
  todosRequested,
  todosRequestFailed,
} = todoSlice.actions;
export default todoSlice.reducer;

// Action creators

export const loadTodos = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.todos;
  console.log(lastFetch);
  const diffInMinute = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinute < 10) return;
  return dispatch(
    apiCallBegan({
      url: "/todos",
      onStart: todosRequested.type,
      onSuccess: todosReceived.type,
      onError: todosRequestFailed.type,
    })
  );
};

// selector
export const getPendingTodos = createSelector(
  (state) => state.entities.todos,
  (todos) => todos.filter((todo) => !todo.completed)
);

export const getTodosByUsers = (userId) =>
  createSelector(
    (state) => state.entities.todos,
    (todos) => todos.filter((todo) => todo.userId == userId)
  );
