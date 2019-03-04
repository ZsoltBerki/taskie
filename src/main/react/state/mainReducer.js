import createReducer from './utils/createReducer';
import ca from './utils/createAction';

import dummyTasks from './dummy/dummyTasks.json'

const initialState = {
  tasks: dummyTasks,
  selectedTask: null,
  floatedTask: null,
  floatedOverTask: null
};

const SELECT_TASK = 'SELECT_TASK';
const FLOAT_TASK = 'FLOAT_TASK';
const FLOATED_OVER = 'FLOATED_OVER';
const DROP_ON = 'DROP_ON';

const ACTION_HANDLERS = {
  [SELECT_TASK]: (state, { payload }) => ({
    ...state,
    selectedTask: payload
  }),
  [FLOAT_TASK]: (state, { payload }) => ({
    ...state,
    floatedTask: payload
  }),
  [FLOATED_OVER]: (state, { payload }) => ({
    ...state,
    floatedOverTask: payload
  }),
  [DROP_ON]: (state, { payload }) => {

    if(payload === state.floatedTask) {
      return {
        ...state,
        floatedTask: null,
        floatedOverTask: null
      }
    }

    const floatedTaskFull = state.tasks.find(task => task.id === state.floatedTask);

    const filteredTaskList = state.tasks
      .filter(task => task.id !== state.floatedTask);

    const indexOfDroppedOnTask = filteredTaskList
      .findIndex(task => task.id === payload);

    const firstHalf = filteredTaskList.slice(0, indexOfDroppedOnTask);
    const secondHalf = filteredTaskList.slice(indexOfDroppedOnTask, filteredTaskList.length);

    return {
      ...state,
      tasks: firstHalf.concat([floatedTaskFull]).concat(secondHalf),
      floatedTask: null,
      floatedOverTask: null
  }}
};

export const selectTask = task => dispatch => {
  dispatch(ca(SELECT_TASK)(task));
};
export const dropOver = task => dispatch => {
  dispatch(ca(DROP_ON)(task));
};
export const floatTask = task => dispatch => {
  dispatch(ca(FLOAT_TASK)(task));
};
export const floatOverTask = task => dispatch => {
  dispatch(ca(FLOATED_OVER)(task));
};

export default createReducer(ACTION_HANDLERS, initialState);
