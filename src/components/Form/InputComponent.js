import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({label, type,onChange,inputId}) => {
  return (
    <div className="flex flex-col md:flex-row pb-4">
      <div className="w-40 h-6 mx-2 mt-3 text-gray-800">{label}</div>
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="w-full flex-1 mx-2">
            <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
              <input className="outline-none w-full text-gray-800" type={type} onChange={onChange} name={inputId} id={inputId}/> 
            </div>
          </div>
        </div>
      </div>  
  );
}

// InputComponent.propTypes = propTypes;
// InputComponent.defaultProps = defaultProps;


export default InputComponent;