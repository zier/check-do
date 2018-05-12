import { connect } from 'react-redux'
import SearchForm from './SearchForm'

const mapStateToProps = (state) => {
  return {
    tagNames: state.Tag.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: () => {}
  }
}

const ContainerSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm)

export default ContainerSearchForm
