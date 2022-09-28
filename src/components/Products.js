import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getProducts } from '../api';
const propTypes = {};

const defaultProps = {};

const Products = () => {
  const [products,setProducts]=useState({});
  const navigate=useNavigate();
  const allProducts=async()=>{
    const products=await getProducts();
    if(products.data){
      setProducts(products.data);
    }
  }
  useEffect(() => {
    allProducts();
  }, []);

  const addButton=()=>{
    return navigate('/new/product');
  }
  return(
  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div className="flex flex-col md:flex-row pb-4">
      <div className="w-40 font-bold h-6 mx-2 mt-3 text-gray-800">Products List</div>
        <div className="w-full flex-1 mx-2 flex flex-row md:flex-row justify-end">
          <button className="px-4 py-2 mr-5 rounded font-bold bg-green-500 text-white cursor-pointer hover:bg-teal-700 hover:text-teal-100" onClick={addButton}>Add</button>
          <button className="px-4 py-2 rounded font-bold bg-red-500 text-white cursor-pointer hover:bg-teal-700 hover:text-teal-100" id='delete-product-btn'>Mass Delete</button>
        </div>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length>0 && products.map((product)=>(
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            {product.type}
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">{product.name}</p>
            <p className="text-base text-gray-400 font-normal">{product.sku}</p>
            <p className="text-base text-gray-400 font-normal">{product.price +'$'}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;


export default Products;