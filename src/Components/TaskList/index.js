import { connect } from 'react-redux'
import TaskList from './TaskList'

import { toggleDoneTask, removeTask } from '../../actions/task'

const mapStateToProps = (state) => {
  return {
    tasks: state.Task.displayItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskClickToggleDone: (id) => {
      dispatch(toggleDoneTask(id))
    },
    onTaskClickDelete: (id) => {
      dispatch(removeTask(id))
    }
  }
}

const ContainerTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default ContainerTaskList
