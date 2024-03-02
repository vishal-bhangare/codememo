import configureStore from "./src/configureStore";
import { getPendingTodos, getTodosByUsers, todoAdded, todoAssignedToUser, todoCompleted, todoRemoved } from './src/store/todos';
import { userAdded } from "./src/store/users";
const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState())
})

store.dispatch(todoAdded({ title: "title1" }))
store.dispatch(todoAdded({ title: "title2" }))
store.dispatch(todoAdded({ title: "title3" }))
store.dispatch(todoCompleted({ id: 1 }))
// unsubscribe();
store.dispatch(userAdded({ name: "vishal" }))
// store.dispatch(todoRemoved({ id: 1 }))
store.dispatch(todoAssignedToUser({ todoId: 2, userId: 1 }))

const a = getPendingTodos(store.getState());
const b = getPendingTodos(store.getState());
console.log(getTodosByUsers(2)(store.getState()))