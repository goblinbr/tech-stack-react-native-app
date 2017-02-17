import * as ActionsTypes from './ActionsTypes';

export const selectLibrary = (libraryId) => ({
  type: ActionsTypes.SELECT_LIBRARY,
  payload: libraryId
});
