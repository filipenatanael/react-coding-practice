import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title, subTitle, bgColor, textColor, font }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    fontFamily: font,
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
  font: 'sans-serif',
};

FullHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  bgColor : PropTypes.string,
  textColor: PropTypes.string,
  font: PropTypes.string,
};

FullHeader.defaultProps = defaultProps;

export default FullHeader;
