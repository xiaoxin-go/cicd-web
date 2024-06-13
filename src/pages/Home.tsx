// Counter.tsx
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'store/store';
import { ShowAlert, HiddenAlert } from 'store/actions';
import About from './About'


// Define props type including state and dispatch props
const mapState = (state: RootState) => ({
  alert: state.alert
});

const mapDispatch = {
  ShowAlert,
  HiddenAlert
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

// Component
const Counter = ({ alert, ShowAlert, HiddenAlert }: PropsFromRedux) => {
  return (
    <div>
      <h2>Counter: {JSON.stringify(alert)}</h2>
      <About></About>
    </div>
  );
};

export default connector(Counter);
