import React, { useEffect } from 'react';
import CardList from '../components/CardList.js';
import CounterButton from '../components/CounterButton.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { requestRobots, filterRobots, setSearchField } from '../actions.js';

const App = () => {
  const robots = useSelector((state) => state.requestRobots.robots);
  const filteredRobots = useSelector((state) => state.filterRobots.robots);

  const dispatch = useDispatch();

  const onSearchChange = (event) => {
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
