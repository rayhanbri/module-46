import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const PorductManagement = () => {
  const [product,setProduct] = useState([]);

  const handleAddProduct = (newProduct) =>{
    const newProducts = [...product,newProduct];
    setProduct(newProducts)
  }
 
  return (
    <div>
      <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
      <ProductTable product={product} ></ProductTable>
      
    </div>
  );
};

export default PorductManagement;