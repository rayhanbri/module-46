import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
     <sectin className="flex">
      <Cousin name='rayhan'></Cousin>
      <Cousin name="taihan"></Cousin>
     
     </sectin>
    </div>
  );
};

export default Uncle;