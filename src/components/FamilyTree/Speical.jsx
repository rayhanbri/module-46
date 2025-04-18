import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Speical = ({asset}) => {
  
  const newAsset = useContext(AssetContext);

  return (
    <div>
      <h3>Special</h3>
      <h2>Asset:{asset}</h2>
      <h2>NewAsset:{newAsset}</h2>
    </div>
  );
};

export default Speical;