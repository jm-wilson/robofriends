import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementClickme } from '../actions';

const CounterButton = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.clickMe.counter);

  const onClickMe = () => {
    dispatch(incrementClickme(counter));
  };

  return <button onClick={onClickMe}>Click me ({counter})</button>;
};

export default CounterButton;
