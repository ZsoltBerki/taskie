import React from 'react';
import PropTypes from 'prop-types';
import TaskListView from '../task-list/TaskListContainer'
import TaskDetailView from '../task-detail/TaskDetailContainer'

const MainView = () => {
  return (
    <div>
      <TaskListView />
      <TaskDetailView />
    </div>
  );
};

MainView.propTypes = {
};

export default MainView;
