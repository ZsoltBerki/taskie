import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GeneralStyles = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

GeneralStyles.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default styled(GeneralStyles)`
  font-family: arial;
`;
