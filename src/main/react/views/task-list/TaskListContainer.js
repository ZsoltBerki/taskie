import { connect } from 'react-redux';
import TaskListView from './TaskListView';
import { selectTask } from '../../state/mainReducer';

const mapStateToProps = state => ({
  tasks: state.main.tasks
});

const mapActionCreator = {
  selectTask
};

export default connect(
  mapStateToProps,
  mapActionCreator
)(TaskListView);