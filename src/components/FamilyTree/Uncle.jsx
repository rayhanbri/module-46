import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Uncle = () => {
  const [money,setMoney] = use(MoneyContext);

   const handleMoney = () =>{
    setMoney(money + 5000);
   }
  return (
    <div>
      <h2>Uncle</h2>
      <button onClick={handleMoney}>Add 5000</button>
     <sectin className="flex">
      <Cousin name='rayhan'></Cousin>
      <Cousin name="taihan"></Cousin>
     
     </sectin>
    </div>
  );
};

export default Uncle;