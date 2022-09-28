import {api} from './constants';

const addProduct=async(data)=>{
  try {
    const res = await api.post(`http://localhost/scanweb/index.php`);
    return res.data;
  } catch (error) {
    if (error.response.data !== undefined) {
      return error;
    }
    return error;
  }
}

const getProducts=async()=>{
  try {
    const res = await api.get(`http://localhost/scanweb/index.php`);
    return res.data;
  } catch (error) {
    if (error.response.data !== undefined) {
      return error;
    }
    return error;
  }
}

export {addProduct,getProducts}