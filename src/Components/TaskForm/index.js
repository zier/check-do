import { connect } from 'react-redux'
import TaskForm from './TaskForm'

const mapStateToProps = (state) => {
  return {
    tagNames: state.TaskForm.tagNames,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (formData) => {
      dispatch({ type: 'ADD_TASK', task: { title: formData.title, description: formData.description } })
    }
  }
}

const ContainerTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm)

export default ContainerTaskForm
