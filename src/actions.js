import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  FILTER_ROBOTS,
  CHANGE_CLICKME_COUNTER,
} from './constants.js';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};

export const filterRobots = (text, robots) => {
  const payload = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(text.toLowerCase());
  });

  return {
    type: FILTER_ROBOTS,
    payload: payload,
  };
};

export const incrementClickme = (counter) => ({
  type: CHANGE_CLICKME_COUNTER,
  payload: counter + 1,
});
