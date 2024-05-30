import FruitTabble from "./FruitTabble";
import VegetablesTabble from "./VegetablesTabble";

export type TableWrapperProps = {
  inputValue: string;
  isProductInStock: boolean;
};

export type FruitsOrVeggies = {
  id: number,
  name: string,
  price: number,
  inStock: boolean
}[];


function TableWrapper({ inputValue, isProductInStock}: TableWrapperProps) {  
  return (
    <>
    <FruitTabble
    inputValue = {inputValue}
    isProductInStock= {isProductInStock}
    />
    <VegetablesTabble
    inputValue = {inputValue}
    isProductInStock= {isProductInStock}
    />
    </>
  )
}

export default TableWrapper