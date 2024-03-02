import configureStore from "./src/configureStore";
import * as actions from "./src/store/api";
import { loadTodos } from "./src/store/todos";

const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(loadTodos());
setTimeout(() => store.dispatch(loadTodos()), 2000);
