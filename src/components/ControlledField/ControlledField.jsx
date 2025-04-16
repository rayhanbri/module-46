import React, { useState } from 'react';

const ControlledField = () => {

  const [password,setPassword]=useState('');
  const handleSubmit  = (e) =>{
    e.preventDefault();
  }

  const handleOnChange = e => {
    console.log(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="1" required />
        <br />
        <input type="password" onChange={handleOnChange} defaultValue={password} name="password" id="2" required/>
        <br />
        <input type="submit" value="submit" />
      </form>

    </div>
  );
};

export default ControlledField;