import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const propTypes = {};

const defaultProps = {};

const ButtonSection = ({buttonName,type}) => {
  const navigate=useNavigate();
  const redirectHome=()=>{
    return navigate('/');
  }
  return(
  <div className="flex flex-col md:flex-row pb-4">
    <div className="w-40 font-bold h-6 mx-2 mt-3 text-gray-800">Product Add</div>
    <div className="w-full flex-1 mx-2 flex flex-row md:flex-row justify-end">
      <button 
        type={type} name={buttonName}
        className="px-4 mr-4 rounded font-bold cursor-pointer bg-blue-500 
        hover:bg-teal-700 hover:text-teal-100 text-white">Save
      </button>
      <button onClick={redirectHome} type="button"
        className="px-4 rounded font-bold cursor-pointer bg-gray-600 
        hover:bg-teal-700 hover:text-teal-100 text-white text-center">Cancel
      </button>
    </div>
  </div>
  );
}

// ButtonSection.propTypes = propTypes;
// ButtonSection.defaultProps =efaultProps;


export default ButtonSection;