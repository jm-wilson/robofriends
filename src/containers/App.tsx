import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import CounterButton from '../components/CounterButton';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { requestRobots, filterRobots, setSearchField } from '../actions';

export interface IRobot {
  name: string;
  id: number;
  email: number;
}

export interface IRootState {
  requestRobots: {
    robots: IRobot[];
  };
  filterRobots: {
    robots: IRobot[];
  };
  clickMe: {
    counter: number;
  };
}

const App: React.FC = (): JSX.Element => {
  const robots = useSelector((state: IRootState): IRobot[] => state.requestRobots.robots);
  const filteredRobots = useSelector((state: IRootState): IRobot[] => state.filterRobots.robots);

  const dispatch = useDispatch();

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchField(event.target.value));
    dispatch(filterRobots(event.target.value, robots));
  };

  useEffect(() => {
    dispatch(requestRobots());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <CounterButton />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
