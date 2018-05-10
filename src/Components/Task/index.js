import { connect } from 'react-redux'
import Task from './Task'
import { toggleDoneTask, removeTask } from '../../actions/task'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickToggleDone: (id) => {
      dispatch(toggleDoneTask(id))
    },
    onClickDelete: (id) => {
      dispatch(removeTask(id))
    }
  }
}

const ContainerTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)

export default ContainerTask
