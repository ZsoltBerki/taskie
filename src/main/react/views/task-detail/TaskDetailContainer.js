import { connect } from 'react-redux';
import TaskDetailView from './TaskDetailView';
import {
  updateSelectedTitle as updateTitle,
  updateSelectedDescription as updateDescription
} from '../../state/mainReducer';

const mapStateToProps = state => ({
  task: state.main.tasks.find(task => task.id === state.main.selectedTaskId)
});

const mapActionCreator = {
  updateTitle,
  updateDescription
};

export default connect(
  mapStateToProps,
  mapActionCreator
)(TaskDetailView);
