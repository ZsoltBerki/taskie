import React from 'react';
import PropTypes from 'prop-types';

const TaskListElement = ({title, className, onClick}) => {
  return (
    <div
      className={`task-list-element ${className}`}
      onClick={onClick}
    >
      <span>{title}</span>
    </div>
  )
};

TaskListElement.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default TaskListElement;