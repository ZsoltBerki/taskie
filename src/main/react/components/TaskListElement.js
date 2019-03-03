import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

export default styled(TaskListElement)`
  min-width: 250px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: inset 0px 0px 2px 0px rgba(0,0,0,0.75);
  margin: 5px;
  
  &:hover {
    background-color: #eeeeee
  }
`;