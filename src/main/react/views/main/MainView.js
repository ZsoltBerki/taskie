import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const MainView = ({number, incrementNumber}) => {
  return (
    <div>
      <p>Change this number to test Redux</p>
      <p>{number}</p>
      <Button onClick={() => incrementNumber(1)} >
        Increase
      </Button>
      <Button onClick={() => incrementNumber(-1)}>
        Decrease
      </Button>
    </div>
  )
};

MainView.propTypes = {
  number: PropTypes.number,
  incrementNumber: PropTypes.func
};

export default MainView;