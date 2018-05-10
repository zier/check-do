import { ADD_TAG } from '../actions/tag'

const Tag = (state = {}, action) => {
  switch (action.type) {
    case ADD_TAG:
      return {
        items: [
          ...state.items,
          action.tag
        ]
      }
    default:
      return state
  }
}

export default Tag
