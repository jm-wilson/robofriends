import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  FILTER_ROBOTS,
} from './constants.js';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should set the search field', () => {
  const text = 'test';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('should request robots from the API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});

it('should handle successful API call', async () => {
  const store = mockStore();
  expect.assertions(2);

  await store.dispatch(actions.requestRobots());
  const theActions = store.getActions();

  expect(theActions[0].type).toEqual(REQUEST_ROBOTS_PENDING);
  expect(theActions[1].type).toEqual(REQUEST_ROBOTS_SUCCESS);
});

it('should handle failing API call', async () => {
  const store = mockStore();
  expect.assertions(2);

  await store.dispatch(actions.requestRobots('https://jsonplac'));
  const theActions = store.getActions();

  expect(theActions[0].type).toEqual(REQUEST_ROBOTS_PENDING);
  expect(theActions[1].type).toEqual(REQUEST_ROBOTS_FAILED);
});

it('should filter robots', () => {
  const initialStateRobots = [
    {
      id: 1,
      name: 'John Snow',
      email: 'john@gmail.com',
    },
    {
      id: 2,
      name: 'Harry Potter',
      email: 'harry@gmail.com',
    },
  ];
  const text = 'harry';
  const expectedAction = {
    type: FILTER_ROBOTS,
    payload: [
      {
        id: 2,
        name: 'Harry Potter',
        email: 'harry@gmail.com',
      },
    ],
  };
  expect(actions.filterRobots(text, initialStateRobots)).toEqual(expectedAction);
});
