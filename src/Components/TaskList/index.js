import { connect } from 'react-redux'
import TaskList from './TaskList'

const mapStateToProps = (state) => {
  return {
    tasks: state.TaskList.displayItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

const ContainerTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default ContainerTaskList
