import React from 'react';

const FormAction = () => {
  const handleAction = (formData) =>{
    console.log(formData.get('name','email'))
    console.log(formData.get('email'))
  }
  return (
    <div>
      <form action={handleAction}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
      
    </div>
  );
};

export default FormAction;