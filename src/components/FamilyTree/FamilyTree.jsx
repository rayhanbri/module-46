import React, { createContext } from 'react';
import Grandpa from './Grandpa';
import "./FamilyTree.css"

export const  AssetContext = createContext("");

const FamilyTree = () => {
  const asset = 'Diamond';
  const newAsset= '100 koti Taka'
  return (
    <div className='family-tree'>
      <h2>Family  Tree</h2>
      <AssetContext.Provider value={newAsset}>
      <Grandpa asset={asset} ></Grandpa>
      </AssetContext.Provider>
      
    </div>
  );
};

export default FamilyTree;