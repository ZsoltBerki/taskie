const createReducer = (ACTION_HANDLERS, initialState = {}) => (
  state = initialState,
  action
) => {
  console.log(action);
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default createReducer;
