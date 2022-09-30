import React from 'react';

const CheckBox = ({id,value,handleChange}) => {
  return(
    <input id={id} onChange={handleChange} name ={id} type="checkbox" value={value}/>
  );
}

export default CheckBox;