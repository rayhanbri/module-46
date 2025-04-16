import React from 'react';
import useInputFiled from '../Hooks/useInputField';

const HookForm = () => {

  const [name,nameOnChange] = useInputFiled('');
  const [email,emailOnChange] = useInputFiled('');
  const [password,passwordOnChange] = useInputFiled('');

  const handleSubmit = e =>{
   
    
    e.preventDefault();
    console.log('submit',name,email,password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input defaultValue={name} onChange={nameOnChange} type="text" />
        <br />
         <input type="email" name="" defaultValue={email} onChange={emailOnChange}  />
        <br />
        <input type="password" name=""  defaultValue={password} onChange={passwordOnChange} />
        <br />
        <input type="submit" value="sub" />
        


      </form>
      
    </div>
  );
};

export default HookForm;