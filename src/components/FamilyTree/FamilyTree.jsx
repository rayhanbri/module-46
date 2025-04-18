import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import "./FamilyTree.css"

export const  AssetContext = createContext("");

export const MoneyContext= createContext(0);

const FamilyTree = () => {
   
  const [money,setMoney] = useState(0);

  const asset = 'Diamond';
  const newAsset= '100 koti Taka'
  return (
    <div className='family-tree'>
      <h2>Family  Tree</h2>
      <h2> Family Asset :{money}</h2>
      <MoneyContext value={[money,setMoney]}>
      <AssetContext.Provider value={newAsset}>
      <Grandpa asset={asset} ></Grandpa>
      </AssetContext.Provider>
      </MoneyContext>
      
    </div>
  );
};

export default FamilyTree;