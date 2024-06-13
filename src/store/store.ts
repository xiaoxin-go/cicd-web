// store.ts
import { createStore, combineReducers } from 'redux';
import {AlertState, counterReducer, AlertReducer, CounterState} from './reducers'; // Import your reducers

// Define the root state type
export interface RootState {
  counter: CounterState;
  alert: AlertState
}

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  alert: AlertReducer
});

// Create the Redux store with the root reducer and initial state
const store = createStore(rootReducer);

export default store;
