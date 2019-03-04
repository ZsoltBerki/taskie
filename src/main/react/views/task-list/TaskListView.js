import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TaskListElement from '../../components/TaskListElement'

const TaskListView = ({ tasks, floatedTask, floatedOverTask,
                        selectTask, floatTask, className, floatOverTask, dropOver }) => {
  return (
    <div
      className={"view-task-list " + className}
    >
      {tasks.map(task => (
        <TaskListElement
          key={task.id}
          title={task.title}
          onClick={() => selectTask(task)}
          onDragStart={() => floatTask(task.id)}
          onDragEnter={() => floatOverTask(task.id)}
          onDragEnd={() => {dropOver(floatedOverTask);}}
          isDraggedOver={task.id === floatedOverTask}
          isDragged={task.id === floatedTask}
        />
      ))}
    </div>
  );
};

TaskListView.propTypes = {
  tasks: PropTypes.any,
  floatedTask: PropTypes.any,
  floatedOverTask: PropTypes.any,
  selectTask: PropTypes.func,
  floatTask: PropTypes.func,
  floatOverTask: PropTypes.func,
  dropOver: PropTypes.func,
  className: PropTypes.string
};

export default styled(TaskListView)`
    margin-right: 30px;
`;