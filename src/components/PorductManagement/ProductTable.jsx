import React from 'react';

const ProductTable = ({product}) => {
  // console.log(products)
  return (
    <div>
      <h3>Products:{product.length}</h3>
      <table style={{textAlign:'center'}}>
        <thead>
          <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            product.map((pro,index) => <tr key={index}>
              <td>{index + 1}</td>
              <td>{pro.name}</td>
              <td>{pro.price}</td>
              <td>{pro.quantity}</td>
              <td></td>
            </tr>)
          }
        </tbody>
      </table>
      
    </div>
  );
};

export default ProductTable;