import React from 'react';
import { useState } from 'react';
import InputComponent from './Form/InputComponent';
import ButtonSection from './Form/ButtonSection';
import SelectComponent from './Form/SelectComponent';
import { addProduct } from '../api';

const propTypes = {};

const defaultProps = {};

const NewProduct = () => {
  const [formData,setData]=useState({});
  const [productType,setType]=useState('');
  const inputHandle=(e)=>{
    const { name } = e.target;
    const { value } = e.target;
    setData((values) => ({ ...values, [name]: value }));
    if(name==='productType'){
      setType(value);
    }
  }
  
  const selectOptions=[
    {
      name:'DVD',
      value:'DVD'
    },
    {
      name:'Book',
      value:'Book'
    },
    {
      name:'Furniture',
      value:'Furniture'
    }
  ];
  const formHandler=async(e)=>{
    e.preventDefault();
    const sendResult=await addProduct(formData);
  }

  return (
    <div className="mt-5 ml-5 mr-5 md:gap-6">
      <form className="mt-5 md:mt-0 md:col-span-2" id="product_form" onSubmit={formHandler}>
        <div className="p-5 px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="mt-2">
            <ButtonSection buttonName={'save'} type={'submit'}/>
            <InputComponent label={'SKU'} type={'text'} onChange={inputHandle} inputId={'sku'}/>
            <InputComponent label={'Name'} type={'text'} onChange={inputHandle} inputId={'name'}/>
            <InputComponent label={'Price($)'} type={'text'} onChange={inputHandle} inputId={'price'}/>
            <SelectComponent label={'Type Switcher'} selectId={'productType'} options={selectOptions} onchange={inputHandle}/>
            {productType==='DVD' && (
              <InputComponent label={'Size'} type={'text'} onChange={inputHandle} inputId={'size'} />
            )}
            {productType==='Book' && (
              <InputComponent label={'Weight'} type={'text'} onChange={inputHandle} inputId={'weight'}/>
            )}
            {productType==='Furniture' && (
              <div className=''>
                <InputComponent label={'Height'} type={'text'} onChange={inputHandle} inputId={'height'}/>
                <InputComponent label={'Width'} type={'text'} onChange={inputHandle} inputId={'width'}/>
                <InputComponent label={'Length'} type={'text'} onChange={inputHandle} inputId={'length'}/>
              </div>
            )}
        </div>
      </div>
    </form>
  </div>
  );
}

NewProduct.propTypes = propTypes;
NewProduct.defaultProps = defaultProps;


export default NewProduct;