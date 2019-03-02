import createReducer from './utils/createReducer';
import ca from './utils/createAction';

import dummyTasks from './dummy/dummyTasks.json'

const initialState = {
  number: 0,
  tasks: dummyTasks,
  selectedTask: null
};

const INCREMENT_NUMBER = 'INCREMENT_NUMBER';

const ACTION_HANDLERS = {
  [INCREMENT_NUMBER]: (state, { payload }) => ({
    ...state,
    number: state.number + payload
  })
};

export const incrementNumber = number => dispatch => {
  dispatch(ca(INCREMENT_NUMBER)(number));
};

export default createReducer(ACTION_HANDLERS, initialState);
