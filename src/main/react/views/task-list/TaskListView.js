import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TaskListElement from '../../components/TaskListElement';

const TaskListView = ({
  tasks,
  draggedTaskId,
  draggedOverTaskId,
  select,
  drag,
  className,
  dragOver,
  dropOn
}) => {
  return (
    <div className={'view-task-list ' + className}>
      {tasks.map(task => (
        <TaskListElement
          key={task.id}
          title={task.title}
          onClick={() => select(task.id)}
          onDragStart={() => drag(task.id)}
          onDragEnter={() => dragOver(task.id)}
          onDragEnd={() => {
            dropOn(draggedOverTaskId);
          }}
          isDraggedOver={task.id === draggedOverTaskId}
          isDragged={task.id === draggedTaskId}
        />
      ))}
    </div>
  );
};

TaskListView.propTypes = {
  tasks: PropTypes.array,
  draggedTaskId: PropTypes.object,
  draggedOverTaskId: PropTypes.object,
  select: PropTypes.func,
  drag: PropTypes.func,
  dragOver: PropTypes.func,
  dropOn: PropTypes.func,
  className: PropTypes.string
};

export default styled(TaskListView)`
  margin-right: 30px;
`;
