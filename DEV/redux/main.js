import configureStore from "./src/configureStore";
import * as actions from "./src/store/api";
import { completeTodo, loadTodos } from "./src/store/todos";

const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});
store.dispatch(loadTodos());
setTimeout(() => {
  store.dispatch(completeTodo(2));
}, 2000);
