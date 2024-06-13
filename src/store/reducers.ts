// reducers.ts
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

export interface AlertState{
  open: boolean
  type: string
  text: string
}

const initialAlertState: AlertState = {
  open: false,
  type: 'success',
  text: ''
}

export const counterReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export const AlertReducer = (state = initialAlertState, action: AlertState) => {
  return {...state, ...action}
};