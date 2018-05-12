import { connect } from 'react-redux'
import TaskForm from './TaskForm'
import { addTask } from '../../actions/task'

const mapStateToProps = (state) => {
  return {
    tagNames: state.Tag.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (formData) => {
      const newTask = {
        title: formData.title,
        description: formData.description,
        isDone: false,
        tags: formData.tags
      }

      dispatch(addTask(newTask))
    }
  }
}

const ContainerTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm)

export default ContainerTaskForm
