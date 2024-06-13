// Counter.tsx
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'store/store';
import { ShowAlert, HiddenAlert } from 'store/actions';

// Define props type including state and dispatch props
const mapState = (state: RootState) => ({
});

const connector = connect(mapState, {
  ShowAlert,
  HiddenAlert
});

type PropsFromRedux = ConnectedProps<typeof connector>;

// Component
const Counter = ({ ShowAlert, HiddenAlert }: PropsFromRedux) => {
  return (
    <div>
      <button onClick={()=>ShowAlert('success', 'hello world')}>Show</button>
      <button onClick={()=>HiddenAlert()}>Hiddel</button>
    </div>
  );
};

export default connector(Counter);
