import {api,SERVER_URL} from './constants';
const addProduct=async(product)=>{
  try {
    const res = await api.post('index.php',JSON.stringify(product));
    if(res.status===201){
      return {success:true,message:res.data.message};
    }
  } catch (error) {
    if (error.response.data !== undefined) {
      return {success:false,message:error.response.data.error};
    }
    return {success:false,message:error.response};
  }
}

const getProducts=async()=>{
  try {
    const res = await api.get('index.php');
    return res.data;
  } catch (error) {
    if (error.response.data !== undefined) {
      return error;
    }
    return error;
  }
}
const deleteProducts=async(products)=>{
  try {
    const res=await fetch(`${SERVER_URL}delete.php`,{
      method:'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(products)
      });
    if(res.ok && res.status===200){
      return {success:true}
    }
    return {success:false}; 
  } catch (error) {
    return {success:false};
  }
}

export {addProduct,getProducts,deleteProducts}
