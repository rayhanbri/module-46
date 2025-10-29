import { useState } from "react";

const useInputFiled = (defaultValue) =>{

  const [fieldValue,setFieldValue] = useState(defaultValue);

  const handleOnChange = e =>{
    // console.log(e.target.value)
    setFieldValue(e.target.value);
  } 

  return [fieldValue,handleOnChange];

}


export default useInputFiled;