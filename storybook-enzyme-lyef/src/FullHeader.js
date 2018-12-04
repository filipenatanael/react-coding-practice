import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title, subTitle, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  };

  const component = (
    <header style={headerStyles}>
      {title && <h1>{title}</h1>}
      {subTitle && <h2>{subTitle}</h2>}
    </header>
  );
  return component;
};

const defaultProps = {
  bgColor: '#ccc',
  textColor: '#fff',
};

FullHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  bgColor : PropTypes.string,
  textColor: PropTypes.string,
};

FullHeader.defaultProps = defaultProps;

export default FullHeader;
