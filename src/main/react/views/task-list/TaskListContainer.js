import { connect } from 'react-redux';
import TaskListView from './TaskListView';
import { selectTask, floatTask, floatOverTask, dropOver } from '../../state/mainReducer';

const mapStateToProps = state => ({
  tasks: state.main.tasks,
  floatedTask: state.main.floatedTask,
  floatedOverTask: state.main.floatedOverTask
});

const mapActionCreator = {
  selectTask, floatTask, floatOverTask, dropOver
};

export default connect(
  mapStateToProps,
  mapActionCreator
)(TaskListView);