import React, { useEffect } from 'react';
import CardList from '../components/CardList.js';
import CounterButton from '../components/CounterButton.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
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
    requestRobots(dispatch);
  }, []);

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <CounterButton />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
