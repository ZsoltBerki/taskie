import { connect } from 'react-redux';
import TaskDetailView from './TaskDetailView';

const mapStateToProps = state => ({
  task: state.main.selectedTask
});

const mapActionCreator = {
};

export default connect(
  mapStateToProps,
  mapActionCreator
)(TaskDetailView);