import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TaskListElement from '../../components/TaskListElement'

const TaskListView = ({ tasks, selectTask, className }) => {
  return (
    <div className={"view-task-list " + className}>
      {tasks.map((task, id) => (
        <TaskListElement
          key={id}
          title={task.title}
          onClick={() => selectTask(task)}
        />
      ))}
    </div>
  );
};

TaskListView.propTypes = {
  tasks: PropTypes.any,
  selectTask: PropTypes.func,
  className: PropTypes.string
};

export default styled(TaskListView)`
    margin-right: 30px;
`;