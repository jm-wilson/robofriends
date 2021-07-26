import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

it('should render Scroll component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      email: 'john@gmail.com',
    },
  ];
  expect(
    shallow(
      <Scroll>
        <ErrorBoundary>
          <CardList robots={mockRobots} />
        </ErrorBoundary>
      </Scroll>,
    ),
  ).toMatchSnapshot();
});
