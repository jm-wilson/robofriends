import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementClickme } from '../actions';
import { IRootState } from '../containers/App';

const CounterButton: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const counter: number = useSelector((state: IRootState) => state.clickMe.counter);

  const onClickMe = () => {
    dispatch(incrementClickme(counter));
  };

  return (
    <button id='btn-counter' onClick={onClickMe}>
      Click me ({counter})
    </button>
  );
};

export default CounterButton;
