import configureStore from "./src/configureStore";
import { getPendingTodos, getTodosByUsers, todoAdded, todoAssignedToUser, todoCompleted, todoRemoved } from './src/store/todos';
import { userAdded } from "./src/store/users";
const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState())
})

store.dispatch({
  type: "error", payload: {
    message: "hello",
  }
})
