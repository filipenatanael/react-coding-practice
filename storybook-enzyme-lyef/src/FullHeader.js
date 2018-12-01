import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title, subTitle }) => {
  const component  = (
    <header>
      {title && <h1>{title}</h1>}
      {subTitle && <h2>{subTitle}</h2>}
    </header>
  );
  return component;
};

FullHeader.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
};

export default FullHeader;
