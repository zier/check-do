import { createActions } from 'redux-actions';

export const { addTag } = createActions({
  ADD_TAG: (tag) => ({ tag }),
})