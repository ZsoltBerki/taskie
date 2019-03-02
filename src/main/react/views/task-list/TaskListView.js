import React from 'react';
import PropTypes from 'prop-types';

import TaskListElement from '../../components/TaskListElement'

const TaskListView = ({ tasks }) => {
  return (
    <div className={"view-task-list"}>
      {tasks.map((task, id) => (
        <TaskListElement
          key={id}
          title={task.title}
        />
      ))}
    </div>
  );
};

TaskListView.propTypes = {
  tasks: PropTypes.any,
};

export default TaskListView;