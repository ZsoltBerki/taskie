const identity = something => something;

const createAction = type => {
  return (...args) => {
    const action = {
      type,
      payload: identity(...args)
    };

    if (action.payload instanceof Error) {
      action.error = true;
    }

    return action;
  };
};

export default createAction;
