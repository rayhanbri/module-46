import React from 'react';
import Grandpa from './Grandpa';
import "./FamilyTree.css"

const FamilyTree = () => {
  const asset = 'Diamond';
  return (
    <div className='family-tree'>
      <h2>Family  Tree</h2>
      <Grandpa asset={asset} ></Grandpa>
      
    </div>
  );
};

export default FamilyTree;