import React from 'react';

const SelectComponent = ({label, selectId,options,onchange}) => {
  return (
  <div className="flex flex-col md:flex-row  pb-4">
    <div className="w-40  h-6 mx-2 mt-3 text-gray-800">{label}</div>
    <div className="flex-1 flex flex-col md:flex-row">
      <div className="w-full flex-1 mx-2">
        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
          <select id={selectId} name='type' className="outline-none w-full text-gray-800" onChange={onchange}>
            <option>Product Type</option>
            {options.map((option)=>(
              <option key={option.name} value={option.value} id={option.id}>{option.name}</option>
            ))}
          </select> 
        </div>
      </div>
    </div>
  </div>);
}

export default SelectComponent;