import React from 'react';
import PropTypes from 'prop-types';
import TaskListView from '../task-list/TaskListContainer'

const MainView = ({ number, incrementNumber }) => {
  return (
    <div>
      <TaskListView />
    </div>
  );
};

MainView.propTypes = {
  number: PropTypes.number,
  incrementNumber: PropTypes.func
};

export default MainView;
