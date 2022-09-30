import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getProducts, deleteProducts} from '../api';
import CheckBox from './Form/CheckBox';

const Products = () => {
  const [products,setProducts]=useState({});
  const [removeIds,setRemove]=useState({});
  const navigate=useNavigate();
  const allProducts=async()=>{
    const products=await getProducts();
    if(products.data){
      setProducts(products.data);
    }
  }

  const massDelete=async()=>{
    const result=await deleteProducts(removeIds);
    if(result.success){
      allProducts();  
    }
  }

  const handleCheckBox=(e)=>{
    if(e.target.checked===true){
      const { name } = e.target;
      const { value } = e.target;
      setRemove((values) => ({ ...values, [value]: name }));
    }else{
      const property=e.target.name;
      const newRemoveIds=Object.fromEntries(Object.entries(removeIds).filter(([key]) => key!==property));
      setRemove(newRemoveIds);
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
          {products.length >0 && <button className="px-4 py-2 rounded font-bold bg-red-500 text-white cursor-pointer hover:bg-teal-700 hover:text-teal-100" id='delete-product-btn' onClick={massDelete}>Mass Delete</button>}
        </div>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length>0 && products.map((product)=>(
        <div className="w-full bg-white rounded-lg p-12 flex flex-row" key={product.id}>
          <div className="mr-5">
            <CheckBox id={product.id} value={product.id} handleChange={handleCheckBox}/>
          </div>
          <div className="ml-5">
            <div className="mb-8">
              <p className="text-xl text-gray-700 font-bold mb-2">{product.type}</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-normal mb-2">{product.name}</p>
              <p className="text-base text-gray-400 font-normal">{product.sku}</p>
              <p className="text-base text-gray-400 font-normal">{product.price +'$'}</p>
              {product.size >0 && 
              <p className="text-base text-gray-400 font-normal">Size: {product.size +'MB'}</p>}
              {product.weight > 0 && 
              <p className="text-base text-gray-400 font-normal">Weight: {product.weight +'KG'}</p>}
              {product.height >0 && 
              <p className="text-base text-gray-400 font-normal text-sm">Dimension: {product.height +'x' +product.width+'x'+product.length}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}


export default Products;