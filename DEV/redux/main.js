import configureStore from "./src/configureStore";
import { todoAdded, todoCompleted, todoRemoved } from './src/store/todos';
const store = configureStore();
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState())
})

store.dispatch(todoAdded({ title: "title1" }))
store.dispatch(todoCompleted({ id: 1 }))
// unsubscribe();

store.dispatch(todoRemoved({ id: 1 }))

console.log(store.getState())