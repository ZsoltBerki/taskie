import React from 'react';
import PropTypes from 'prop-types';
import TaskListView from '../task-list/TaskListContainer';
import TaskDetailView from '../task-detail/TaskDetailContainer';
import styled from 'styled-components';

const MainView = ({ className }) => {
  return (
    <div className={className}>
      <TaskListView />
      <TaskDetailView />
    </div>
  );
};

MainView.propTypes = {};

export default styled(MainView)`
  display: flex;
  width: 100%;
`;
