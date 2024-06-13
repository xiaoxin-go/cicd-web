import {Button, TextField} from "@mui/material";
import {SearchProps} from "components/Search/Search.types";
import {ChangeEvent, useState} from "react";


export const Search = (props: SearchProps) => {
  const [data, setData] = useState<any>({})
  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  return (<>
      {
        props.items.map(item =>
          <TextField size="small"
                     label={item.label}
                     name={item.field}
                     value={data[item.field]}
                     select={item.select}
                     onChange={handlerChange}
                     variant="outlined"/>
        )
      }

      <Button variant="contained" size="small" style={{marginLeft: "10px"}} onClick={() => {
        props.onSearch(data)
      }}>Search</Button>
    </>
  )
}