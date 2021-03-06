import createReducer from './utils/createReducer';
import ca from './utils/createAction';

import dummyTasks from './dummy/dummyTasks.json';

const initialState = {
  tasks: dummyTasks,
  selectedTaskId: null,
  draggedTaskId: null,
  draggedOverTaskId: null
};

const SELECT_TASK = 'SELECT_TASK';
const DRAG_TASK = 'DRAG_TASK';
const DRAG_OVER_TASK = 'DRAG_OVER_TASK';
const DROP_ON_TASK = 'DROP_ON_TASK';
const UPDATE_SELECTED_TITLE = 'UPDATE_SELECTED_TITLE';
const UPDATE_SELECTED_DESCRIPTION = 'UPDATE_SELECTED_DESCRIPTION';

const ACTION_HANDLERS = {
  [SELECT_TASK]: (state, { payload }) => ({
    ...state,
    selectedTaskId: payload
  }),
  [DRAG_TASK]: (state, { payload }) => ({
    ...state,
    draggedTaskId: payload
  }),
  [DRAG_OVER_TASK]: (state, { payload }) => ({
    ...state,
    draggedOverTaskId: payload
  }),
  [UPDATE_SELECTED_TITLE]: (state, { payload }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === state.selectedTaskId ? { ...task, title: payload } : task
    )
  }),
  [UPDATE_SELECTED_DESCRIPTION]: (state, { payload }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === state.selectedTaskId
        ? { ...task, description: payload }
        : task
    )
  }),
  [DROP_ON_TASK]: (state, { payload }) => {
    const droppedOnTaskId = payload;

    if (droppedOnTaskId === state.draggedTaskId) {
      return {
        ...state,
        draggedTaskId: null,
        draggedOverTaskId: null
      };
    }

    const draggedTask = state.tasks.find(
      task => task.id === state.draggedTaskId
    );

    const untouchedTasks = state.tasks.filter(
      task => task.id !== state.draggedTaskId
    );

    const indexOfDroppedOnTask = untouchedTasks.findIndex(
      task => task.id === droppedOnTaskId
    );

    const firstHalf = untouchedTasks.slice(0, indexOfDroppedOnTask);
    const secondHalf = untouchedTasks.slice(
      indexOfDroppedOnTask,
      untouchedTasks.length
    );

    return {
      ...state,
      tasks: firstHalf.concat([draggedTask]).concat(secondHalf),
      draggedTaskId: null,
      draggedOverTaskId: null
    };
  }
};

export const select = task => dispatch => {
  dispatch(ca(SELECT_TASK)(task));
};
export const dropOn = task => dispatch => {
  dispatch(ca(DROP_ON_TASK)(task));
};
export const drag = task => dispatch => {
  dispatch(ca(DRAG_TASK)(task));
};
export const dragOver = task => dispatch => {
  dispatch(ca(DRAG_OVER_TASK)(task));
};
export const updateSelectedTitle = title => dispatch => {
  dispatch(ca(UPDATE_SELECTED_TITLE)(title));
};
export const updateSelectedDescription = description => dispatch => {
  dispatch(ca(UPDATE_SELECTED_DESCRIPTION)(description));
};

export default createReducer(ACTION_HANDLERS, initialState);
