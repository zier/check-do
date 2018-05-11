import { handleActions } from 'redux-actions';
import { addTag } from '../actions/tag'

const Tag = handleActions(
  {
    [addTag]: (state, action) => {
      return {
        items: [
          ...state.items,
          action.tag
        ]
      }
    },
  },
  {}
)

export default Tag
