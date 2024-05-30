import { useState } from "react";
import InputArea from "./InputArea"
import TableWrapper from "./TableWrapper"


export const AppWrapper = () => {
 const [inputValue, setinputValue] = useState('');
  const [isProductInStock, setisProductInStock] = useState(true)

  return (
  <>
  <InputArea
    inputValue = {inputValue}
    setinputValue= {setinputValue}
    isProductInStock= {isProductInStock}
    setisProductInStock= {setisProductInStock}
  />
  <TableWrapper
    inputValue = {inputValue}
    isProductInStock= {isProductInStock}
  />
  </>
  )
};



export default AppWrapper