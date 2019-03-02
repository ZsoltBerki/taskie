import createReducer from './utils/createReducer';
import ca from './utils/createAction';

import dummyTasks from './dummy/dummyTasks.json'

const initialState = {
  tasks: dummyTasks,
  selectedTask: null
};

const SELECT_TASK = 'SELECT_TASK';

const ACTION_HANDLERS = {
  [SELECT_TASK]: (state, { payload }) => ({
    ...state,
    selectedTask: payload
  })
};

export const selectTask = task => dispatch => {
  dispatch(ca(SELECT_TASK)(task));
};

export default createReducer(ACTION_HANDLERS, initialState);
