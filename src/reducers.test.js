import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  FILTER_ROBOTS,
  CHANGE_CLICKME_COUNTER,
} from './constants.js';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: '',
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc',
      }),
    ).toEqual({
      searchField: 'abc',
    });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUESTS_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      }),
    ).toEqual({
      isPending: true,
      robots: [],
      error: '',
    });
  });

  it('should handle REQUESTS_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: 'John Snow',
            email: 'john@gmail.com',
          },
        ],
      }),
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: 1,
          name: 'John Snow',
          email: 'john@gmail.com',
        },
      ],
      error: '',
    });
  });

  it('should handle REQUESTS_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOOOOO',
      }),
    ).toEqual({
      isPending: false,
      robots: [],
      error: 'NOOOOOO',
    });
  });
});

describe('filterRobots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
  };

  it('should return the initial state', () => {
    expect(reducers.filterRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle FILTER_ROBOTS', () => {
    expect(
      reducers.filterRobots(initialStateRobots, {
        type: FILTER_ROBOTS,
        payload: [
          {
            id: 1,
            name: 'John Snow',
            email: 'john@gmail.com',
          },
        ],
      }),
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: 1,
          name: 'John Snow',
          email: 'john@gmail.com',
        },
      ],
      error: '',
    });
  });
});

describe('clickMe', () => {
  const initialStateClickme = {
    counter: 0,
  };

  it('should return the initial state', () => {
    expect(reducers.clickMe(undefined, {})).toEqual(initialStateClickme);
  });

  it('should handle CHANGE_CLICKME_COUNTER', () => {
    expect(
      reducers.clickMe(initialStateClickme, {
        type: CHANGE_CLICKME_COUNTER,
        payload: 5,
      }),
    ).toEqual({
      counter: 5,
    });
  });
});
