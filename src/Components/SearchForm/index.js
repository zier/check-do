import { connect } from 'react-redux'
import SearchForm from './SearchForm'
import { filterTags } from '../../actions/task'

const mapStateToProps = (state) => {
  return {
    tagNames: state.Tag.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (tags) => { dispatch(filterTags(tags)) }
  }
}

const ContainerSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)

export default ContainerSearchForm
