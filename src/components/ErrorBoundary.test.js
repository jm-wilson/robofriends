import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';
import ErrorBoundry from './ErrorBoundary';

it('should render ErrorBoundary component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      email: 'john@gmail.com',
    },
  ];
  expect(
    shallow(
      <ErrorBoundry>
        <CardList robots={mockRobots} />
      </ErrorBoundry>,
    ),
  ).toMatchSnapshot();
});

it('should safely catch an error', () => {
  const wrapper = shallow(
    <ErrorBoundry>
      <CardList />
    </ErrorBoundry>,
  );

  const error = new Error('OH NO');
  wrapper.first().simulateError(error);

  expect(wrapper).toMatchSnapshot();
});
