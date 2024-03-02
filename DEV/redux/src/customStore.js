import reducer from './reducer'

function createStore() {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }
  function subscribe(listner) {
    listeners.push(listner)
  }
  function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach(listner => {
      listner()
    });
  }
  return {
    getState, dispatch, subscribe
  }
}
export default createStore();