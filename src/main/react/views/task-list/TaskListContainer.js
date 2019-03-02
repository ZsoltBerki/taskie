import { connect } from 'react-redux';
import TaskListView from './TaskListView';
import { incrementNumber } from '../../state/mainReducer';

const mapStateToProps = state => ({
  tasks: state.main.tasks
});

const mapActionCreator = {
  incrementNumber
};

export default connect(
  mapStateToProps,
  mapActionCreator
)(TaskListView);