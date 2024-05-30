import { Typography } from "@mui/material"
import { TableWrapperProps, FruitsOrVeggies } from "./TableWrapper"

function VegetablesTabble({ inputValue, isProductInStock}:TableWrapperProps) {
  const veggies: FruitsOrVeggies = [
    { id: 0, name: "Domates", price: 4, inStock: false},
    { id: 1, name: "Biber", price: 5, inStock: true},
    { id: 2, name: "Patlıcan", price: 6,inStock: true},
  ]

  const filteredProducts = veggies.filter((vegie) => {
    if (isProductInStock) {
      return vegie.inStock && vegie.name.toLowerCase().includes(inputValue.toLowerCase())
    }
    return vegie.name.toLowerCase().includes(inputValue.toLowerCase())
  } )

  return (
    <>
    <Typography variant="h6" component="h2">
        Vegies
      </Typography>
      <table>
        <tbody>
          {filteredProducts.map((vegie) => {
            if (vegie.name.toLowerCase().includes(inputValue.toLowerCase()))
              return (
          <tr key={vegie.id}>
            <td>{vegie.name}</td>
            <td>{vegie.price}$</td>
          </tr>)})}
        </tbody>
      </table>
    </>

  )
}

export default VegetablesTabble