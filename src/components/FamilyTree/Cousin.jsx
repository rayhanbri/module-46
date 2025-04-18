import React from 'react';
import Speical from './Speical';

const Cousin = ({name,asset}) => {
  return (
    <div>
      <h3>{name}</h3>
      {
        name == 'tom tom' && <Speical asset={asset}></Speical>
      }
      
    </div>
  );
};

export default Cousin;