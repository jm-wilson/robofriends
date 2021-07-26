import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import { useSelector, useDispatch } from 'react-redux';
import { incrementClickme } from '../actions';

const mockDispatch = jest.fn();

test('should say "Click me (0)" when counter is 0', () => {
  useSelector.mockImplementation(() => 0);

  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

test('should say "Click me (5)" when counter is 5', () => {
  useSelector.mockImplementation(() => 5);

  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

test('should run useDispatch on click', () => {
  useDispatch.mockImplementation(() => mockDispatch);

  const wrapper = shallow(<CounterButton />);

  wrapper.find('[id="btn-counter"]').simulate('click');
  expect(mockDispatch).toBeCalledTimes(1);
  expect(mockDispatch).toBeCalledWith(incrementClickme());
});
