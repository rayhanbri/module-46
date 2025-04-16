import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

  const [error,setError] = useState('')

  const handleSubmit=e=>{
    e.preventDefault();
    // console.log(e.target.name.value)
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity= e.target.quantity.value;

    // console.log(name,price,quantity)

     if(name.length === 0){
      setError('please provide a name')
      return;
     }
     else if(price.length === 0){
      setError('please provide  a price');
      return;
     }


    const newProduct ={
      name,
      price,
      quantity
    }
  // console.log(newProduct)

  handleAddProduct(newProduct)

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Product Name' />
        <br />
        <input type="text" name='price' placeholder='Product Price' />
        <br />
        <input type="text" name='quantity' placeholder='Product Quantity' />
        <br />
        <input type="submit" value="Submit kor" />
      </form>
      <p style={{color:'red'}}>{error}</p>
      
    </div>
  );
};

export default ProductForm;