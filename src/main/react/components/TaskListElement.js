import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TaskListElement = ({title, className, onClick,
                           isDragged, isDraggedOver,
                           onDragStart, onDragEnd, onDragEnter}) => {
  return (
    <div
      className={`droppable task-list-element ${className} ${isDragged ? 'dragged' : ''} ${isDraggedOver ? 'dragged-over' : ''}`}
      onClick={onClick}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      draggable
    >
      <span>{title}</span>
    </div>
  )
};

TaskListElement.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragEnter: PropTypes.func,
  isDragged: PropTypes.bool,
  isDraggedOver: PropTypes.bool
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
  
  &.dragged{
    background-color: #eeeeee
  }
  
  &.dragged-over{
    margin-top: 38px;
    background: none;
    &:hover {
      background-color: #none
    }
  }
`;