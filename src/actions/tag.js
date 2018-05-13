import { createActions } from 'redux-actions';

export const { addTags } = createActions({
  ADD_TAGS: (tags) => ({ tags }),
})
