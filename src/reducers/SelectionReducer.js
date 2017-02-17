import { SELECT_LIBRARY } from '../actions/ActionsTypes';

export default (state = -1, action) => {
  switch (action.type) {
    case SELECT_LIBRARY:
      return action.payload;
    default:
      return state;
  }
};
