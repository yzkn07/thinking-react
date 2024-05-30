import { Typography } from "@mui/material"
import {TableWrapperProps, FruitsOrVeggies} from "./TableWrapper"

function FruitTabble({ inputValue, isProductInStock}: TableWrapperProps) {

    const fruits: FruitsOrVeggies = [
      { id: 0, name: "Apple", price: 1, inStock: true},
      { id: 1, name: "Strawberry", price: 2, inStock: false},
      { id: 2, name: "Cherry", price: 3, inStock: true},
    ]

    const filteredProducts = fruits.filter((fruit) => {
      if (isProductInStock) {
        return fruit.inStock && fruit.name.toLowerCase().includes(inputValue.toLowerCase())
      }
      return fruit.name.toLowerCase().includes(inputValue.toLowerCase())
    } )

  return (
    <>
    <Typography variant="h6" component="h2">
        Fruits
      </Typography>
      <table>
        <tbody>
        {filteredProducts.map((fruit) => {
            if (fruit.name.toLowerCase().includes(inputValue.toLowerCase()))
              return (
          <tr key={fruit.id}>
            <td>{fruit.name}</td>
            <td>{fruit.price}$</td>
          </tr>)})}
        </tbody>
      </table>
    </>
  )
}

export default FruitTabble