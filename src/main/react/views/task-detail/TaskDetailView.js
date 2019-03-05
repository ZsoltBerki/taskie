import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const TaskDetailView = ({
  task,
  className,
  updateTitle,
  updateDescription
}) => {
  if (task) {
    const { title, description } = task;
    return (
      <div className={`view-task-detail ${className}`}>
        <h2 className={'task-detail-title'}>{title}</h2>
        <input
          type="text"
          name="task-title"
          id="task-title"
          value={title}
          onChange={e => updateTitle(e.target.value)}
        />
        <p className={'task-detail-description'}>{description}</p>
        <Input
          type="textarea"
          rows={13}
          name="task-description"
          id="task-description"
          value={description}
          onChange={e => updateDescription(e.target.value)}
        />
      </div>
    );
  } else {
    return (
      <div className={`view-task-detail ${className}`}>
        <p className={'task-detail-no-task'}>task is not selected</p>
      </div>
    );
  }
};

TaskDetailView.propTypes = {
  task: PropTypes.any,
  className: PropTypes.string,
  updateTitle: PropTypes.func,
  updateDescription: PropTypes.func
};

export default TaskDetailView;
