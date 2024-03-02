import { createStore } from 'redux';
import reducer from './store/todos'
import { devToolsEnhancer } from '@redux-devtools/extension';


export default function configureStore() {
  const store = createStore(reducer, devToolsEnhancer({ trace: true }));
  return store
}