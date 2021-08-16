import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  FILTER_ROBOTS,
  CHANGE_CLICKME_COUNTER,
} from './constants';
import { Reducer } from 'react';
import {
  ActionWithNumberPayload,
  ActionWithObjectPayload,
  ActionWithStringPayload,
} from './actions';

const initialStateSearch = {
  searchField: '',
};

export const searchRobots: Reducer<object, ActionWithStringPayload> = (
  state = initialStateSearch,
  action = {},
) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
};

export const requestRobots: Reducer<object, ActionWithObjectPayload> = (
  state = initialStateRobots,
  action = {},
) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

export const filterRobots: Reducer<object, ActionWithObjectPayload> = (
  state = initialStateRobots,
  action = {},
) => {
  switch (action.type) {
    case FILTER_ROBOTS:
      return { ...state, robots: action.payload };
    default:
      return state;
  }
};

const initialStateClickme = {
  counter: 0,
};

export const clickMe: Reducer<object, ActionWithNumberPayload> = (
  state = initialStateClickme,
  action = {},
) => {
  switch (action.type) {
    case CHANGE_CLICKME_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
