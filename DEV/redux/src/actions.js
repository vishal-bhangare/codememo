import * as actions from "./actionTypes";

export const todoAdded = title => ({
  type: actions.TODO_ADDED,
  payload: {
    title: title
  }
})

export const todoRemoved = id => ({
  type: actions.TODO_REMOVED,
  payload: {
    id: id
  }
})

export const todoCompleted = id => ({
  type: actions.TODO_COMPLETED,
  payload: {
    id: id
  }
}) 