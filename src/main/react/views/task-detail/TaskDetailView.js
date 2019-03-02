import React from 'react';
import PropTypes from 'prop-types';
import TaskListElement from "../../components/TaskListElement";

const TaskDetailView = ({task, className}) => {
  if(task) {
    const {title, description} = task;
    return (
      <div className={`view-task-detail ${className}`}>
        <h2 className={'task-detail-title'}>
          {title}
        </h2>
        <p className={'task-detail-description'}>
          {description}
        </p>
      </div>
    )
  } else {
    return <div className={`view-task-detail ${className}`}>
      <p className={'task-detail-no-task'}>
        task is not selected
      </p>
    </div>
  }
};

TaskListElement.propTypes = {
  task: PropTypes.any,
  className: PropTypes.string
};

export default TaskDetailView