import { handleActions } from 'redux-actions';
import { addTag } from '../actions/tag'

const defaultState = {
  items: [
    'work',
    'family',
    'urgent'
  ]
}

const Tag = handleActions({
    [addTag]: (state,  { payload: { tag } }) => {
      return {
        items: [
          ...state.items,
          tag
        ]
      }
    },
  },
  defaultState
)

export default Tag
