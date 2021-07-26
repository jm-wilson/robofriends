import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

const mockSearchChange = jest.fn();

let wrapper;
beforeEach(() => {
  wrapper = shallow(<SearchBox searchChange={mockSearchChange} />);
});

it('should render SearchBox component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should call searchChange method when changed', () => {
  wrapper.find('[type="search"]').simulate('change', 'teststring');
  expect(mockSearchChange).toBeCalled();
  expect(mockSearchChange).toBeCalledWith('teststring');
});
