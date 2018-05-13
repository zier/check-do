import { handleActions } from 'redux-actions'
import { union } from 'lodash'
import { addTags } from '../actions/tag'

const defaultState = {
  items: [
    'work',
    'family',
    'urgent'
  ]
}

const Tag = handleActions({
    [addTags]: (state,  { payload: { tags } }) => {
      return {
        items: union(tags,state.items)
      }
    },
  },
  defaultState
)

export default Tag
