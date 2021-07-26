import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

it('should render App component', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
