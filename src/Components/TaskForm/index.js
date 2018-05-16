import { connect } from 'react-redux'
import TaskForm from './TaskForm'
import { addTask } from '../../actions/task'
import { addTags } from '../../actions/tag'

const mapStateToProps = (state) => {
  return {
    tagNames: state.Tag.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (formData, resetForm) => {
      const newTask = {
        title: formData.title,
        description: formData.description,
        isDone: false,
        tags: formData.tags
      }
      
      dispatch(addTask(newTask))
      dispatch(addTags(formData.tags))

      resetForm()
    }
  }
}

const ContainerTaskForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm)

export default ContainerTaskForm
