import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import PageNotFound from './components/errors/PageNotFound';
const propTypes = {};

const defaultProps = {};

const App=()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/new/product" element={<NewProduct/>}/>
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;