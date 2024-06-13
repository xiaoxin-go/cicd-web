import {PaginationProps} from "components/Pagination/Pagination.types";
import MPagination from '@mui/material/Pagination';
import {MenuItem, Select} from "@mui/material";

export const Pagination = (props: PaginationProps) =>{
  return <div style={{
    display: "flex",
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginLeft: 'auto',
    marginTop: 15
  }}>
    Total: {props.count}
    <MPagination count={Math.ceil(props.count / Number(props.pageSize))} page={props.page} color="primary" onChange={props.changePage}/>
    <Select
      value={props.pageSize}
      size="small"
      onChange={props.changePageSize}
      sx={{height: 26, "& .MuiOutlinedInput-notchedOutline": {border: 0}, marginLeft: '-10px'}}
    >
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={20}>20</MenuItem>
      <MenuItem value={50}>50</MenuItem>
      <MenuItem value={100}>100</MenuItem>
    </Select>
  </div>
}