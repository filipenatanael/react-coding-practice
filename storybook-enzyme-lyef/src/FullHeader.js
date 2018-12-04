import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  bgColor : PropTypes.string,
  textColor: PropTypes.string,
  font: PropTypes.string,
  bgImg: PropTypes.string,
};

const defaultProps = {
  bgColor: '#ccc',
  textColor: '#fff',
  font: 'sans-serif',
  bgImg: '',
};

const FullHeader = ({ title, subTitle, bgColor, textColor, font, bgImg }) => {
  const headerStyleCombined = {
    ...StyleSheet.header,
    backgroundColor: bgColor,
    backgroundImage: `url(${bgImg})`,
    color: textColor,
    fontFamily: font,
  };

  const component = (
    <header style={headerStyleCombined}>
      <div style={StyleSheet.container}>
      {title && <h1 style={StyleSheet.title}>{title}</h1>}
      {subTitle && <h2 style={StyleSheet.subTitle}>{subTitle}</h2>}
      </div>
    </header>
  );
  return component;
};

FullHeader.defaultProps = defaultProps;
FullHeader.defaultProps = propTypes;

const StyleSheet = {
  header: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover'
  },
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 2
  },
  title: {
    fontSize: '5rem',
    lineHeight: '1.5'
  },
  subTitle: {
    fontSize: '2rem',
    lineHeight: '1.5'
  }
}

export default FullHeader;
