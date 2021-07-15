import React, { useEffect } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { incrementClickme, requestRobots, filterRobots, setSearchField } from '../actions.js';

const App = () => {
  const counter = useSelector((state) => state.clickMe.counter);
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const robots = useSelector((state) => state.requestRobots.robots);
  const filteredRobots = useSelector((state) => state.filterRobots.robots);

  const dispatch = useDispatch();

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
    dispatch(filterRobots(event.target.value, robots));
  };

  const onClickMe = () => {
    dispatch(incrementClickme(counter));
  };

  useEffect(() => {
    requestRobots(dispatch);
  }, []);

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <button onClick={onClickMe}>Click me ({counter})</button>
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
