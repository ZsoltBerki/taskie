import { connect } from 'react-redux';
import TaskDetailView from './TaskDetailView';

const mapStateToProps = state => ({
  task: state.main.tasks.find(task => task.id === state.main.selectedTaskId)
});

const mapActionCreator = {
};

export default connect(
  mapStateToProps,
  mapActionCreator
)(TaskDetailView);