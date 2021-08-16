import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  FILTER_ROBOTS,
  CHANGE_CLICKME_COUNTER,
} from './constants';
import { IRobot } from './containers/App';
import { Dispatch } from 'redux';

export interface ActionWithStringPayload {
  type?: string;
  payload?: string;
}
export interface ActionWithObjectPayload {
  type?: string;
  payload?: object;
}
export interface ActionWithNumberPayload {
  type?: string;
  payload?: number;
}

export const setSearchField = (text: string): ActionWithStringPayload => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots =
  (apiLink: string = 'https://jsonplaceholder.typicode.com/users') =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: REQUEST_ROBOTS_PENDING });
      const data = await fetch(apiLink).then((response) => response.json());
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
      dispatch({ type: FILTER_ROBOTS, payload: data });
    } catch (error) {
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
    }
  };

export const filterRobots = (text: string, robots: IRobot[]): ActionWithObjectPayload => {
  const payload = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(text.toLowerCase());
  });

  return {
    type: FILTER_ROBOTS,
    payload: payload,
  };
};

export const incrementClickme = (counter: number): ActionWithNumberPayload => ({
  type: CHANGE_CLICKME_COUNTER,
  payload: counter + 1,
});
