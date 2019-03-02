import React from 'react';
import PropTypes from 'prop-types';

const TaskListElement = ({title, className}) => {
  return (
    <div className={`task-list-element ${className}`}>
      <span>{title}</span>
    </div>
  )
};

TaskListElement.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default TaskListElement;