import { Dispatch, SetStateAction, useEffect } from "react";
import { Checkbox, TextField, Typography, Stack } from "@mui/material"

// type InputProps =  "standard" | "outlined" | "contained";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export type InputAreaProps = {
  inputValue: string; 
  setinputValue: Dispatch<SetStateAction<string>>; 
  isProductInStock: boolean;
  setisProductInStock: Dispatch<SetStateAction<boolean>>;
}


function InputArea({
  inputValue, 
  setinputValue, 
  isProductInStock, 
  setisProductInStock
}: InputAreaProps) {
//    const input: InputProps = 'contained';

    useEffect(() => {
    }, [isProductInStock, inputValue]);


  return (
    <Stack spacing={2}>
        <TextField id="outlined-basic" label="ara" variant="outlined" value={inputValue} 
        onChange={(e) => setinputValue(e.target.value)}/>
    {/* {input} */}
    <Stack direction="row" display='flex' justifyContent="center" alignItems="center">
        <Checkbox {...label} checked={isProductInStock} onChange={(e) => setisProductInStock(e.target.checked)}/>
        <Typography variant="body1" component="span">
            Sadece var olanları göster.
        </Typography>
    </Stack>
    </Stack>
  )
}

export default InputArea