import React from 'react';

const CheckBox = ({id,value,handleChange}) => {
  return(
    <input id={id} onChange={handleChange} name ={id} type="checkbox" value={value} className="delete-checkbox"/>
  );
}

export default CheckBox;