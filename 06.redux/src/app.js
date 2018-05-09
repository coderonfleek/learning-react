import { createStore, combineReducers } from "redux";

//define the initial state of the app
let initialState = {
  count: 0,
  students: []
};

//Reducers
//Create a reducer to handle state for each state property
const countReducer = (countState = initialState.count, action) => {
  switch (action.type) {
    case "INCREMENT":
      return countState + 1;
      break;

    case "INCREMENTBY":
      return countState + action.amount;
      break;

    case "DECREMENT":
      return countState - 1;
      break;

    default:
      return countState;
      break;
  }
};

const studentsReducer = (studentsState = initialState.students, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...studentsState, action.name]; //Use spread to create a new array by adding the old array and the new entry
      break;
    default:
      return studentsState;
      break;
  }
};

//Combine the reducers
//Map each state property to its appropriate reducer
const reducers = combineReducers({
  count: countReducer,
  students: studentsReducer
});

//Create a store with the combined reducers
const store = createStore(reducers);

//get the current state
//console.log(store.getState());

//Subscribe to the store to watch for changes and perform an action anytime a change occurs
const mySubscription = store.subscribe(() => {
  console.log(store.getState());
});

//Dispatch an action
const incrementAction = {
  type: "INCREMENT"
};

const decrementAction = {
  type: "DECREMENT"
};

const incrementByAction = {
  type: "INCREMENTBY",
  amount: 5
};

const addStudent = {
  type: "ADD_STUDENT",
  name: "John"
};

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);

store.dispatch(addStudent);

store.dispatch(decrementAction);

store.dispatch(incrementByAction);
//To unsubscribe, simply call the 'mySubscription' function
mySubscription();

//This will not affect the store
store.dispatch(decrementAction);

//get the current state
//console.log(store.getState());
