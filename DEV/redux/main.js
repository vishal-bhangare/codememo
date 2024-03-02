import store from "./src/store";
import { todoAdded, todoCompleted } from './src/actions';

const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState())
})

// store.dispatch(todoAdded("title1"))
// store.dispatch(todoCompleted(1))
// unsubscribe();

// store.dispatch()

console.log(store.getState())