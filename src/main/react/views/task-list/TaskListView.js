import React from 'react';
import PropTypes from 'prop-types';

import TaskListElement from '../../components/TaskListElement'

const TaskListView = ({ tasks, selectTask }) => {
  return (
    <div className={"view-task-list"}>
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
  selectTask: PropTypes.func
};

export default TaskListView;