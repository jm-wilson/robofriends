import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('should render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      email: 'john@gmail.com',
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});

it('should render empty CardList component', () => {
  expect(shallow(<CardList robots={[]} />)).toMatchSnapshot();
});
