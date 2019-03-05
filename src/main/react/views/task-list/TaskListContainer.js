import { connect } from 'react-redux';
import TaskListView from './TaskListView';
import { select, drag, dragOver, dropOn } from '../../state/mainReducer';

const mapStateToProps = state => ({
  tasks: state.main.tasks,
  draggedTaskId: state.main.draggedTaskId,
  draggedOverTaskId: state.main.draggedOverTaskId
});

const mapActionCreator = {
  select,
  drag,
  dragOver,
  dropOn
};

export default connect(
  mapStateToProps,
  mapActionCreator
)(TaskListView);
