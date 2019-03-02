import { connect } from 'react-redux';
import MainView from './MainView';
import { incrementNumber } from '../../state/mainReducer';

const mapStateToProps = state => ({
  number: state.main.number
});

const mapActionCreator = {
  incrementNumber
};

export default connect(
  mapStateToProps,
  mapActionCreator
)(MainView);