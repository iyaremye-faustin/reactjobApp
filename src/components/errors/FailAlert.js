import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message:PropTypes.string
};

const defaultProps = {
  message:'Operation failed!',
};

const FailAlert = ({message}) => {
  return (
    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
      <span className="font-medium">{message}</span>
    </div>
  );
}

FailAlert.propTypes = propTypes;
FailAlert.defaultProps = defaultProps;

export default FailAlert;