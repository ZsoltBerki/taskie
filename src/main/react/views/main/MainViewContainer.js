import { connect } from 'react-redux';
import MainView from './MainView';

const mapStateToProps = state => ({
  number: state.main.number
});

const mapActionCreator = {
};

export default connect(
  mapStateToProps,
  mapActionCreator
)(MainView);
